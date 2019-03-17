source 'https://rubygems.org'

ruby `cat .ruby-version`
# Specify your gem's dependencies in voom-console.gemspec
gemspec

gem 'pry', group: :development
group :test do
  gem 'rspec'
  gem 'rspec-html-matchers'
  gem 'watir', '~> 6.10.3'
  gem "webdrivers", "~> 3.0"
  gem 'watir-rspec'
  gem 'rspec_junit_formatter'
  gem 'simplecov', require: false
end

gem 'foo_presenter_plugin',  github:'rx/foo_presenter_plugin'
gem 'image_crop_presenter_plugin',  github:'rx/image_crop_presenter_plugin'
gem 'rack-cors'
