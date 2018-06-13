class ProfilePagesController < ApplicationController
	before_action :authenticate_user!

  def index
  @categorie = Category.all
  puts params[:interests]
  end

  def create
	

  	
  end
end

