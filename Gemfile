source 'https://rubygems.org'
ruby '2.3.1'

# application
gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
gem 'pg', '~> 0.18'

# css
gem 'sass-rails', '~> 5.0'

# optimizers
gem 'uglifier', '>= 1.3.0'

# server
gem 'puma', '~> 3.0'
gem 'foreman', group: :development
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# debug
group :development do
  gem 'byebug'
  gem 'better_errors'
  gem 'meta_request'
  gem 'binding_of_caller'
  gem 'bullet'
  gem 'traceroute'
  gem 'rails_best_practices'
  gem 'brakeman', require: false
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'rack-mini-profiler', github: 'MiniProfiler/rack-mini-profiler'
  gem 'sextant'
  gem 'i18n-tasks', '~> 0.8.7'
end

# tests
# -------------------

# guards
group :development do
  gem 'rubocop', require: false
  gem 'rubycritic', require: false
  gem 'guard', require: false
  gem 'guard-annotate', require: false
  gem 'guard-rubocop', require: false
  gem 'guard-foreman'
  gem 'terminal-notifier'
  gem 'terminal-notifier-guard'
  gem 'guard-bundler', require: false
  gem 'guard-rspec', require: false
  gem 'guard-shell'
  gem 'guard-brakeman'
  gem 'guard-rails_best_practices', github: 'logankoester/guard-rails_best_practices'
  gem 'guard-livereload', '~> 2.5.2', require: false
  gem 'rack-livereload'
  gem 'guard-sidekiq'
  gem 'rb-fsevent', require: false
  gem 'guard-coffeescript'
  gem 'guard-sass'
  gem 'ruby_gntp'
end

# console
group :console do
  gem 'awesome_print'
  gem 'hirb', github: 'bogdan/hirb', branch: 'render-nils'
  gem 'pry'
  gem 'pry-rails'
  gem 'pry-rescue'
  gem 'pry-doc'
  gem 'pry-stack_explorer'
  gem 'pry-byebug'
end
