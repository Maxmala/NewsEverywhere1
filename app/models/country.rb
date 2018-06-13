class Country < ApplicationRecord
	has_many :articles
	validates :name, uniqueness: true


	def return_integer
		return 2
	end
		
end

