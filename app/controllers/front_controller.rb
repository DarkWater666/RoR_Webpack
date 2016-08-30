class FrontController < ApplicationController
  include ApplicationHelper

  respond_to :html

  def index
    component(__method__)
  end

  Front::GetPages.each { |page| define_method(page) { component(page) } }

  private

  def component(name)
    render 'shared/template', locals: { name: name }
  end

end
