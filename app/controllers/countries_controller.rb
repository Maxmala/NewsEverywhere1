class CountriesController < ApplicationController
  
  
  def show
  	#afficher params id

    @country = Country.find_by(id: params[:id])
  	@name = @country.name
    @articles = @country.articles.limit(10)

   	EasyTranslate.api_key = ENV['EASY_TRANSLATE']
 

  end

  def index

  end



end
