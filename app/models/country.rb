class Country < ApplicationRecord
	has_many :articles
	validates :name, uniqueness: true
	


end

