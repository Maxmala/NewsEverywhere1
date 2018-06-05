class HomeController < ApplicationController
  
  require "dotenv/load"
  require 'news-api'
  require 'open-uri'

  def index
  	newsapi = News.new(ENV["API_NEWS_KEY"])
  	@all_articles = newsapi.get_everything(q: 'cryptocurrency',
                                      
                                      from: '2018-05-01',
                                      to: '2018-06-04',
                                      language: 'en',
                                      #country: 'us',
                                      sortBy: 'relevancy',
                                      page: 2)

url = 'https://newsapi.org/v2/top-headlines?'\
      'country=us&'\
      'apiKey=f5bae944f89c4462868275fb3d0a86d6'
req = open(url)
@response_body = req.read


end

def homepage
	end
end
