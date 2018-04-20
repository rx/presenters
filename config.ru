#!/usr/bin/env ruby
ENV['VOOM_ROOT'] = File.expand_path(__dir__)
libdir = File.join(ENV['VOOM_ROOT'], 'lib')
$:.unshift(libdir) unless $:.include?(libdir)
require 'voom/presenters/api/app'
require 'voom/presenters/web_client/app'

require 'sinatra/base'

class SearchDemo < Sinatra::Base
  get('/_search_') do
    content_type :json
    JSON.dump(search(params[:search]))
  end

  post('/_search_') do
    query_string = params.map{|k,v| "#{k}=#{CGI.escape(v)}"}.join('&')
    redirect "#{params[:redirect]}?#{query_string}"
  end

  def search(term)
    require 'yaml'
    return [] unless term
    @terms ||= YAML::load_file(File.join(__dir__, './search-terms.yml'))
    @terms.keys.reduce([]) do |matches, topic|
      @terms[topic].reduce(matches) do |matches, item|

        matches << [item,matches.length] if item.downcase.include?(term.downcase)
        matches
      end
    end
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end

use SearchDemo
use Voom::Presenters::WebClient::App
run Voom::Presenters::Api::App

Voom::Presenters::Settings.configure do |config|
  config.presenters.root = File.join(ENV['VOOM_ROOT'], 'app')
end
Voom::Presenters::App.boot!

