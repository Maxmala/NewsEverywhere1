class Article < ApplicationRecord
  belongs_to :category
  belongs_to :country
  validates :description, presence: true
  validates :url, presence: true
  validates :description, uniqueness: true
  
  	

end
