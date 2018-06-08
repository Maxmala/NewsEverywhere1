namespace :articles do 
desc "log db, delete db, update db"
task :update_articles => :environment do

require "open-uri"

#log the current db

#delete the current db
Country.destroy_all
Category.destroy_all
Article.destroy_all

#use the api to update the db
	def article
	newsapi = News.new(ENV["API_NEWS_KEY"])

	        @countries = Country.all.pluck(:shortcode)
	        @categories = Category.all.pluck(:name)
	        @countries.each do |shortcode| 
	            @categories.each do |name|

	                link = 'https://newsapi.org/v2/top-headlines?'\
	                'country=' + shortcode + '&'\
	                'category=' + name + '&'\
	                'apiKey='+ ENV['API_NEWS_KEY']
	                req = open(link)
	                @response_body = JSON.parse(req.read)
	                @response_body['articles'].each do |article|
	                    @source = article["source"]['name']
	                    @author = article["author"]
	                    @description = article["description"] 
	                    @url = article["url"]
	                    @urlToImage = article["urlToImage"]
	                    @category_id = Category.find_by(name: name).id
	                    @country_id = Country.find_by(shortcode: shortcode).id
	                     Article.create(source: @source, author: @author, description: @description, url: @url, urlToImage: @urlToImage, category_id: @category_id, country_id: @country_id)

	                end
	            end
	        end
	    end
	        puts 'it worked'
	end
end

