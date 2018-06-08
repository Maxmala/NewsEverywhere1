class CountriesController < ApplicationController
  
  def show
  	#afficher params id
  	@country = Country.find_by(id: params[:id])
  	@name = @country.name
  	@articles = Article.where(country_id: @country.id)
  	
  

  end



end
