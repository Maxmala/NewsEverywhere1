class ProfilePagesController < ApplicationController
	before_action :authenticate_user!

  def index
    @user = current_user
    @categories = @user.category_ids
    @countries = @user.country_ids
    @articles = []

    case 
    when @categories.any?  && @countries.any?
      @categories.each do |cate|
        @countries.each do |coun|
          @articles.concat(Article.where(category_id: cate, country_id: coun).pluck(:id))
        end
      end
      if @articles.length > 20
          @articles = (@articles.shuffle!).take(20)
          return @articles
      else
        return @articles
      end

    when @categories.any? 
      @countries = Country.all.pluck(:id)
      @categories.each do |cate|
        @countries.each do |coun|
          @articles.concat(Article.where(category_id: cate, country_id: coun).pluck(:id))
        end
      end
        if @articles.length > 20
          @@articles = (@articles.shuffle!).take(20)
          return @articles
      else
        return @articles
      end

    when @countries.any?
      @categories = Category.all.pluck(:id)
      @categories.each do |cate|
        @countries.each do |coun|
          @articles.concat(Article.where(category_id: cate, country_id: coun).pluck(:id))
        end
      end
      if @articles.length > 20
        @articles = (@articles.shuffle!).take(20)
          return @articles
      else
        return @articles
      end

    else
      @articles = Article.all.sample(20).pluck(:id)
      return @articles
            
    end

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
    @user.countries.destroy_all

    @countries = params[:user][:country_ids]
    @countries.each do |id|

    @user.countries << Country.where(id: id)


    end
  end
end

