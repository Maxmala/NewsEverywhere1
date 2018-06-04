class HomeController < ApplicationController
  
  require "dotenv/load"
  require 'news-api'

  def index
  	newsapi = News.new("f5bae944f89c4462868275fb3d0a86d6")
  	@all_articles = newsapi.get_everything(q: 'news',
                                      
                                      from: '2018-04-04',
                                      to: '2018-06-04',
                                      language: 'en',
                                      sortBy: 'relevancy',
                                      page: 10)
  end


end
