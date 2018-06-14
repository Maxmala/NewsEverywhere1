class CountriesController < ApplicationController
  
  
  def show
  	#afficher params id
    @category = Category.new
    @country = Country.find_by(id: params[:id])
  	@name = @country.name
    @name1 = @country.continent
    @articles = @country.articles.take(20)
    image
   	EasyTranslate.api_key = ENV['EASY_TRANSLATE']
 

  end

  def show_filter
    @category = Category.find(params[:category][:id])
    @country = Country.find(params[:id])
    @articles = Article.where(category_id: params[:category][:id], country_id: params[:id])
    @name = @country.name
    @name1 = @country.continent
    image
    EasyTranslate.api_key = ENV['EASY_TRANSLATE']

  end

  private
	def image

 	case
  	when @country.continent == "Afrique"
  		then  @image1 = "Afrique.jpg"
            @image2 = "Afrique2.jpg"
            @image3 = "Afrique3.jpg"

  	when @country.continent == "Amérique"
  		then  @image1 = "Amérique.jpg"
            @image2 = "Amérique2.jpg"
            @image3 = "Amérique3.jpg"
  	when @country.continent == "Europe"
  		then  @image1 = "Europe.jpg"
            @image2 = "Europe2.jpg"
            @image3 = "Europe3.jpg"
  	when @country.continent == "Asie"
  		then  @image1 = "Asie.jpg"
            @image2 = "Asie2.jpg"
            @image3 = "Asie3.jpg"
  	else
        		@image1 = "Océanie.jpg"
            @image2 = "Océanie2.jpg"
            @image3 = "Océanie3.jpg"
  	end
  	
  end


  def index

  end



end
