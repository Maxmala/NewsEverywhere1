class CountriesController < ApplicationController
  
  def show
  	#afficher params id
  	@country = Country.find_by(id: params[:id])
  	@name = @country.name
  	@articles = @country.articles
  	@sources = @articles.pluck(:source)
  	
  

  end



end
