class BmodelGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)

  argument :url, type: :string, default: 'url-goes-here'

  def generate_view
    template "model.js.erb", File.join('app', 'assets', 'javascripts', 'models', "#{file_name}.js")
    %x{echo //= require models/#{file_name} | pbcopy}
    %x{#{ENV['EDITOR']} #{File.join('app', 'assets', 'javascripts', 'application.js')}}
  end

  private

  def file_name
    name.underscore
  end

end
