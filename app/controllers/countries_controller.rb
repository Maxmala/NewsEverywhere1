class CountriesController < ApplicationController
  
  
  def show
  	#afficher params id

    @country = Country.find_by(id: params[:id])
  	@name = @country.name
    @articles = @country.articles.limit(10)
    image
   	EasyTranslate.api_key = ENV['EASY_TRANSLATE']
 

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


  def index

  end



end
