class ProfilePagesController < ApplicationController
	before_action :authenticate_user!

  def index
  @categorie = Category.all
  puts params[:interests]
  end

  def create
	

  	
  end

  def settings
    @user = current_user
    end

  def set_settings
    @user = current_user
    @user.categories.destroy_all
    
    @categories = params[:user][:category_ids]
    @categories.each do |id|

    @user.categories << Category.where(id: id)
    end
  end
end

