class User < ApplicationRecord

	has_and_belongs_to_many :categories
	has_and_belongs_to_many :countries
	has_many :articles, through: :categories_users
	has_many :articles, through: :countries_users
	
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable





        
end
