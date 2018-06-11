class CountriesController < ApplicationController
  
  def show
  	#afficher params id
  	@country = Country.find_by(id: params[:id])
  	@name = @country.name
  	@articles = @country.articles
  	image
  	translate
 

  end

  private

  def image

  	case 
  	when @country.continent == "Afrique"
  		then @image = "Africa.jpg"
  	when @country.continent == "Amérique"
  		then @image = "America.jpg"
  	when @country.continent == "Asie"
  		then @image = "Asia.jpg"
  	when @country.continent == "Europe"
  		then @image = "Europa.jpg"
  	when @country.continent == "Océanie"
  		then @image = "Oceania.jpg"
  	else
  		@image = "Europa.jpg"
  	end
  	

  end

  def translate
  	EasyTranslate.api_key = ENV['EASY_TRANSLATE']
  	

  end



end
