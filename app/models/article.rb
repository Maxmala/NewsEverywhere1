class Article < ApplicationRecord
  belongs_to :category
  belongs_to :country
  attr_accessor :source, :author, :description, :url, :urlToImage, :category_id, :country_id
  validates :description, presence: true
end
