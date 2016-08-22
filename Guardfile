notification :off
interactor :simple

guard 'annotate', show_indexes: true, notify: false do
  watch('db/schema.rb')
  watch('db/structure.sql')
end

guard :bundler do
  require 'guard/bundler'
  require 'guard/bundler/verify'
  helper = Guard::Bundler::Verify.new

  files = ['Gemfile']
  files += Dir['*.gemspec'] if files.any? { |f| helper.uses_gemspec?(f) }

  # Assume files are symlinked from somewhere
  files.each { |file| watch(helper.real_path(file)) }
end

guard :shell do
  watch(%r{^app/assets/.*}) { `rm -rf tmp/cache` }
end

guard :rubocop do
  watch(/.+\.rb$/)
  watch(%r{(?:.+\/)?\.rubocop\.yml$}) { |m| File.dirname(m[0]) }
end

guard 'coffeescript', input: 'coffee', output: 'js', noop: true, hide_success: true,
                      all_on_start: true, all_on_change: true

guard :livereload do
  watch(%r{app/views/.+\.(erb|haml|slim)$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html|png|jpg))).*}) { |m| "/assets/#{m[3]}" }
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(slim|haml))).*}) { |m| "/assets/#{m[3]}.html" }
  watch(%r{(app|vendor)(/assets/\w+/(.+)\.(styl|sass|scss))}) { |m| "/assets/#{m[3]}.css" }
  watch(%r{(app|vendor)(/assets/\w+/(.+)\.(coffee))}) { |m| "/assets/#{m[3]}.js" }
end

guard 'brakeman' do
  watch(%r{^app/.+\.(erb|haml|rhtml|rb)$})
  watch(%r{^config/.+\.rb$})
  watch(%r{^lib/.+\.rb$})
  watch('Gemfile')
end

guard :rails_best_practices do
  watch(%r{^app/(.+)\.rb$})
end

guard :foreman, procfile: 'Procfile.dev' do
  watch( /^app\/(controllers|models|helpers)\/.+\.rb$/ )
  watch( /^lib\/.+\.rb$/ )
  watch( /^config\/*/ )
end
