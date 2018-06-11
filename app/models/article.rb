class Article < ApplicationRecord
  belongs_to :category
  belongs_to :country
  attr_accessor :source, :author, :description, :url, :urlToImage, :category_id, :country_id
  validates :description, presence: true
  validates :url, presence: true
  before_save :default_values

  def default_values
  	self.urlToImage ||= ''
  	
  end
end
