class HomeController < ApplicationController
  
  require "dotenv/load"
  require 'news-api'

  def index
  	newsapi = News.new(ENV["API_NEWS_KEY"])
  	@all_articles = newsapi.get_everything(q: 'bitcoin',
                                      sources: 'bbc-news,the-verge',
                                      domains: 'bbc.co.uk,techcrunch.com',
                                      from: '2018-04-01',
                                      to: '2017-06-04',
                                      language: 'en',
                                      sortBy: 'relevancy',
                                      page: 2)


end

def homepage
	end
end
