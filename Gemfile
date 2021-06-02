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

gem 'rack-cors'
gem 'honeybadger' if ENV.fetch('HONEYBADGER_API_KEY'){false}
gem 'puma'
