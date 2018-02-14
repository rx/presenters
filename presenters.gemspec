# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'voom/presenters/version'

Gem::Specification.new do |spec|
  spec.name = 'voom-ui'
  spec.version = Voom::Presenters::VERSION
  spec.authors = ['Russell Edens']
  spec.email = ["russell@voomify.com\n"]

  spec.summary = 'Voom UI Gem.'
  spec.homepage = 'http://github.com/voomify/voom/gems/ui'
  spec.license = 'MIT'

  spec.files = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir = 'exe'
  spec.executables = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ['lib']

  spec.add_runtime_dependency 'ice_nine'
  spec.add_runtime_dependency 'dry-container'
  spec.add_runtime_dependency 'sinatra'
  spec.add_runtime_dependency 'rdiscount' # markdown support
  
  spec.add_development_dependency 'pry', '~>0.10.1'
  spec.add_development_dependency 'bundler', '~> 1.13'
  spec.add_development_dependency 'rake', '~> 11.3'
  spec.add_development_dependency 'rspec', '~> 3.0'
end
