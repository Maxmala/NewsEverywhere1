class CategoriesController < ApplicationController


  def show
  	#afficher params id

    @category = Category.find_by(id: params[:id])
  	@name = @category.nameFr
  	@articles = @category.articles.limit(10)
    EasyTranslate.api_key = ENV['EASY_TRANSLATE']
 	image

  end

	def image

  	case 
  	when @category == "Business"
  		then @image = "Business.jpg"
  	when @country == "Entertainment"
  		then @image = "Entertainment.jpg"
  	when @country == "Health"
  		then @image = "Health.jpg"
  	when @country == "Science"
  		then @image = "Science.jpg"
  	when @country == "Sports"
  		then @image = "Sports.jpg"
  	else
  		@image = "Technology.jpg"
  	end
  	
  end

end