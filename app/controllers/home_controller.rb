class HomeController < ApplicationController

 require "dotenv/load"
 require "open-uri"


  def index

  	newsapi = News.new(ENV["API_NEWS_KEY"])

  	
    url = 'https://newsapi.org/v2/top-headlines?'\
      'country=us&'\
      'apiKey='+ ENV['API_NEWS_KEY']
    req = open(url)
    @response_body = JSON.parse(req.read)

  end

  def homepage
	end

end
