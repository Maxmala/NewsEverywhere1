class CategoriesController < ApplicationController


  def show
  	#afficher params id

    @category = Category.find_by(id: params[:id])
  	@name = @category.name
  	@articles = @category.articles.limit(10)

    EasyTranslate.api_key = ENV['EASY_TRANSLATE']
 	image

  end

	def image

  	case 
  	when @category.nameFr == "Business"
  		then @image = "Business.jpg"
  	when @category.nameFr == "Divertissement"
  		then @image = "Entertainment.jpg"
  	when @category.nameFr == "Santé"
  		then @image = "Health.jpg"
  	when @category.nameFr == "Science"
  		then @image = "Science.jpg"
  	when @category.nameFr == "Sport"
  		then @image = "Sports.jpg"
  	else
  		@image = "Technology.jpg"
  	end
  	
  end

end