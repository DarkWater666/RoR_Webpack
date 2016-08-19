Rails.application.configure do
  config.cache_classes = false
  config.eager_load = false
  config.public_file_server.enabled = true
  config.middleware.insert_after ActionDispatch::Static, Rack::LiveReload
  config.consider_all_requests_local = true
  Rack::MiniProfiler.config.start_hidden = true
  if Rails.root.join('tmp/caching-dev.txt').exist?
    config.action_controller.perform_caching = true
    config.action_mailer.perform_caching = false
    config.cache_store = :memory_store
    config.public_file_server.headers = { 'Cache-Control' => 'public, max-age=172800' }
  else
    config.action_controller.perform_caching = false
    config.action_mailer.perform_caching = false
    config.cache_store = :null_store
  end
  config.action_mailer.raise_delivery_errors = false
  config.active_support.deprecation = :log
  config.active_record.migration_error = :page_load
  config.assets.debug = false
  config.assets.digest = false
  config.assets.raise_runtime_errors = true
  config.action_view.raise_on_missing_translations = true
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.perform_deliveries = true
  config.action_mailer.default charset: 'utf-8'
  config.action_mailer.smtp_settings = { address: '127.0.0.1', port: 1025 }
  config.file_watcher = ActiveSupport::EventedFileUpdateChecker
end
