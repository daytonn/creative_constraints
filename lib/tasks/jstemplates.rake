if Rails.env.development? || Rails.env.test?
  require 'erb'
  require 'ejs'
  require 'listen'

  namespace :jst do
    @assets_path = File.join(Rails.root, 'lib', 'assets')
    @javascripts_path = File.join(Rails.root, 'app', 'assets', 'javascripts')
    @templates_path = File.join(@javascripts_path, 'templates')
    @erb_template = File.join(@assets_path, 'compiled_templates.erb')
    @template_file = File.join(@javascripts_path, 'templates.js')

    desc "Compile the javascript templates"
    task :build => :environment do
      begin
        templates = templates_hash @templates_path
        compiled_templates = ERB.new(File.read(@erb_template))
        templates = template_string templates
        File.open(@template_file, "w+") { |f| f << compiled_templates.result(binding) }
        puts "#{@template_file.gsub(Rails.root.to_s, '')} was built successfully"
      rescue Exception => e
        puts "There was an error compiling the templates: #{e.message}\n"
        raise e
      end
    end

    desc "Watch the templates for changes and compile automatically"
    task :watch => :environment do
      Rake::Task["jst:build"].execute
      puts "Watching for js template changes. Press Ctrl+C to quit"
      Listen.to(@templates_path, filter: /\.jst$/) do
        Rake::Task["jst:build"].execute
      end
    end

    def templates_hash(path, data = {}, namespace = nil)
      Dir.foreach(path) do |entry|
        next if entry =~ /^\./

        full_path = File.join(path, entry)

        if File.directory?(full_path)
          namespace = File.basename(entry, '.jst')
          templates_hash(full_path, data[namespace] = {})
        else
          template_name = File.basename(entry, '.jst')
          data[template_name] = EJS.compile(File.read(full_path))
        end
      end

      data
    end

    def template_string(templates, result="{")
      templates.to_s
        .gsub(/\=\>/, ': ')
        .gsub(/\"function/, 'function')
        .gsub(/\}\"/, '}')
        .gsub(/\\n/, "\n")
    end

  end
end