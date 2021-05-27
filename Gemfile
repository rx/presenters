source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby `[  -z "$RBENV_VERSION" ] && cat .ruby-version || echo $RBENV_VERSION`

gemspec

gem 'pry', group: :development

group :test do
  gem 'rspec'
  gem 'rspec-html-matchers'
  gem 'watir', '~> 6.16'
  gem 'webdrivers', '~> 4.1'
  gem 'watir-rspec', '~> 3.0'
  gem 'rspec_junit_formatter'
  gem 'simplecov', require: false
end

gem 'foo_presenter_plugin',  path:'../../coprl/foo_presenter_plugin'
gem 'image_crop_presenter_plugin',  path:'../../coprl/image_crop_presenter_plugin'
gem 'chart_presenter_plugin',  path:'../../coprl/chart_presenter_plugin'
gem 'rack-cors'
gem 'honeybadger' if ENV.fetch('HONEYBADGER_API_KEY'){false}
gem 'puma'
