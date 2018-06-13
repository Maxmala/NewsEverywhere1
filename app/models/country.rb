class Country < ApplicationRecord
	has_many :articles
	validates :name, uniqueness: true

def method_name

	def image

  	case continent
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
	


end

