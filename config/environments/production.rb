Rails.application.configure do
  config.cache_classes = true
  config.eager_load = true
  config.consider_all_requests_local = false
  config.action_controller.perform_caching = true
  config.public_file_server.enabled = ENV['RAILS_SERVE_STATIC_FILES'].present?
  config.assets.js_compressor = :uglifier
  config.assets.css_compressor = :sass
  config.assets.compile = false
  config.assets.digest = true
  config.public_file_server.headers = {
    'Cache-Control' => 'public, max-age=172800'
  }
  # config.action_controller.asset_host = 'http://assets.example.com'
  # config.action_dispatch.x_sendfile_header = 'X-Sendfile' # for Apache
  config.action_dispatch.x_sendfile_header = 'X-Accel-Redirect' # for NGINX
  # config.action_cable.url = 'wss://example.com/cable'
  # config.action_cable.allowed_request_origins = [ 'http://example.com', /http:\/\/example.*/ ]
  # config.force_ssl = true
  config.log_level = :debug
  config.log_tags = [:request_id]
  # require 'syslog/logger'
  # config.logger = ActiveSupport::TaggedLogging.new(Syslog::Logger.new 'app-name')
  if ENV['RAILS_LOG_TO_STDOUT'].present?
    config.logger = ActiveSupport::TaggedLogging.new(Logger.new(STDOUT))
  end
  # config.cache_store = :mem_cache_store
  # config.active_job.queue_adapter     = :resque
  # config.active_job.queue_name_prefix = "pro_football_#{Rails.env}"
  config.action_mailer.perform_caching = false
  config.i18n.fallbacks = true
  config.active_support.deprecation = :notify
  config.log_formatter = ::Logger::Formatter.new
  config.active_record.dump_schema_after_migration = false
  config.action_mailer.perform_deliveries = true
  config.action_mailer.raise_delivery_errors = false
  config.action_mailer.default charset: 'utf-8'
  config.action_mailer.smtp_settings = {
    address:              'smtp.mail.ru',
    port:                 465,
    domain:               'pro_football.ru',
    user_name:            'no-reply@darkcreative.ru',
    password:             'Dark25293Water',
    authentication:       :plain,
    enable_starttls_auto: true,
    ssl:                  true,
    tls:                  true
  }
end
