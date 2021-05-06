puts 'loaded CoprlController from engine'
class CoprlController < ApplicationController
  def show
    render :show, layout: 'coprl'
  end
end
