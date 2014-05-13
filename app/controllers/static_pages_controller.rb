class StaticPagesController < ApplicationController
  before_filter :require_current_user!

  def root
    @current_user = current_user
    render :root
  end
end
