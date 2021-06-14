source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby `[  -z "$RBENV_VERSION" ] && cat .ruby-version || echo $RBENV_VERSION`

gemspec

group :development do
  gem 'pry'
  gem 'pry-byebug'
end

group :test do
  gem 'rspec'
  gem 'rspec-html-matchers'
  gem 'watir', '~> 6.16'
  gem 'webdrivers', '~> 4.1'
  gem 'watir-rspec', '~> 3.0'
  gem 'rspec_junit_formatter'
  gem 'simplecov', require: false
end

# Plugins
gem 'foo_presenter_plugin',  github: 'coprl/foo_presenter_plugin', require: false
gem 'image_crop_presenter_plugin',  github: 'coprl/image_crop_presenter_plugin', require: false
gem 'chart_presenter_plugin',  github: 'coprl/chart_presenter_plugin', require: false
gem 'google_maps_presenter_plugin',  github: 'coprl/google_maps_presenter_plugin', branch: :main, require: false
gem 'cacheable_presenter_plugin', github: 'coprl/cacheable_presenter_plugin', require: false
gem 'script_presenter_plugin', github: 'coprl/script_presenter_plugin', require: false
gem 'scroll_to_presenter_plugin', github: 'coprl/scroll_to_presenter_plugin', require: false
gem 'clipboard_presenter_plugin', github: 'coprl/clipboard_presenter_plugin', require: false
gem 'markup_presenter_plugin', github: 'coprl/markup_presenter_plugin', require: false

gem 'rack-cors'
gem 'honeybadger' if ENV.fetch('HONEYBADGER_API_KEY'){false}
gem 'puma'
gem 'dotenv'
