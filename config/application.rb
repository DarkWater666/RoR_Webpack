require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module WebpackRails
  class Application < Rails::Application
    config.app_generators.scaffold_controller :responders_controller
    config.time_zone = 'Europe/Moscow'
    config.encoding = 'utf-8'
    # routes.default_url_options = config.action_mailer.default_url_options = { host: Figaro.env.host }
    # config.action_mailer.asset_host = "http://#{Figaro.env.host}"
    config.i18n.default_locale = config.i18n.locale = :ru
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}')]
    config.assets.paths << Rails.root.join('app', 'assets', 'templates')
    config.autoload_paths += %W(#{config.root}/app/models/ckeditor #{config.root}/app/lib)
    config.autoload_paths += Dir.glob("#{config.root}/app/interactions/**/*")
    config.autoload_paths += Dir.glob("#{config.root}/app/aggregates/**/*")

    config.generators do |g|
      g.assets = false
      g.helper = false
      g.view_specs      false
      g.template_engine false
      g.decorator       false
    end

    config.active_record.schema_format = :sql

    console do
      Bundler.require(:console)
      ActiveRecord::Base.logger = Logger.new(STDOUT)

      AwesomePrint.irb! if defined?(::AwesomePrint)
      Hirb.enable if defined?(::Hirb)
    end
  end
end
