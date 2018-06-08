class CountriesController < ApplicationController
  
  def show
  	#afficher params id
  	@country = Country.find_by(id: params[:id])
  	@name = @country.name
  	
  

  end



end
