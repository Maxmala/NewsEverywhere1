class Article < ApplicationRecord
  belongs_to :category
  belongs_to :country
  validates :description, presence: true
  validates :description, uniqueness: true
  validates :url, presence: true
  after_initialize :default_values


  def self.filtered_elements()
    
  end

  private

  def default_values
  	self.urlToImage ||= "https://cdn.pixabay.com/photo/2011/12/13/14/30/earth-11014_960_720.jpg"
	end

end
