class Country < ApplicationRecord
	has_many :articles
	validates :name, uniqueness: true

	def image

  	case 
  	when @country.continent == "Afrique"
  		then @image = "Afrique.jpg"
  	when @country.continent == "Amérique"
  		then @image = "Amérique.jpg"
  	when @country.continent == "Asie"
  		then @image = "Asie.jpg"
  	when @country.continent == "Europe"
  		then @image = "Europe.jpg"
  	when @country.continent == "Océanie"
  		then @image = "Océanie.jpg"
  	else
  		@image = "Europe.jpg"
  	end
  	
  end
end
