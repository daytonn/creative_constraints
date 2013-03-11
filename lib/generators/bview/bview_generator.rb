class BviewGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)

  argument :subdir, type: :string, default: ''

  def generate_view
    create_root
    create_file "#{template_root}/#{file_name}.jst"
    template "view.js.erb", "#{view_root}/#{file_name}.js"
    %x{echo //= require views/#{subdir}/#{file_name} | pbcopy}
    %x{#{ENV['EDITOR']} #{File.join('app', 'assets', 'javascripts', 'application.js')}}
  end

  private

  def file_name
    "#{name.underscore}"
  end

  def template_root
    if subdir
      "app/assets/javascripts/templates/#{subdir}"
    else
      "app/assets/javascripts/templates"
    end
  end

  def view_root
    if subdir
      "app/assets/javascripts/views/#{subdir}"
    else
      "app/assets/javascripts/views"
    end
  end

  def create_root
    FileUtils.mkdir_p template_root unless File.directory? template_root
    FileUtils.mkdir_p view_root unless File.directory? view_root
  end

end
