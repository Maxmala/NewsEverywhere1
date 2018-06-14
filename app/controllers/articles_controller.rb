class ArticlesController < ApplicationController
  



  def show

  	@url = Article.find_by(id: params[:id]).url
  

  end

 


end
