class HomeController < ApplicationController
  
  require "dotenv/load"
  require 'news-api'

  def index
  	newsapi = News.new(ENV["API_NEWS_KEY"])
  	@all_articles = newsapi.get_everything(q: 'cryptocurrency',
                                      
                                      from: '2018-05-01',
                                      to: '2018-06-04',
                                      language: 'en',
                                      #country: 'us',
                                      sortBy: 'relevancy',
                                      page: 5)


end

def homepage
	end
end
