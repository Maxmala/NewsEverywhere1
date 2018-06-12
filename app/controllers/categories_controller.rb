class CategoriesController < ApplicationController
  before_action :image

  def show
  	#afficher params id

    @category = Category.find_by(id: params[:id])
  	@name = @category.nameFr
  	@articles = @category.articles.limit(10)
    EasyTranslate.api_key = ENV['EASY_TRANSLATE']
 

  end


end