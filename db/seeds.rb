# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    require "open-uri"


def country

        Country.create(name: "Argentine", shortcode: "ar", continent: "Amérique")
        Country.create(name: "Australie", shortcode: "au", continent: "Océanie")
        Country.create(name: "Autriche", shortcode: "at", continent: "Europe")
        Country.create(name: "Belgique", shortcode: "be", continent: "Europe")
        Country.create(name: "Brésil", shortcode: "br", continent: "Amérique")
        Country.create(name: "Bulgarie", shortcode: "bg", continent: "Europe")
        Country.create(name: "Canada", shortcode: "ca", continent: "Amérique")
        Country.create(name: "Chine", shortcode: "cn", continent: "Asie")
        Country.create(name: "Colombie", shortcode: "co", continent: "Amérique")
        Country.create(name: "Cuba", shortcode: "cu", continent: "Amérique")
        Country.create(name: "Republique Tchèque ", shortcode: "cz", continent: "Afrique")
        Country.create(name: "Egypte", shortcode: "eg", continent: "Afrique")
        Country.create(name: "France", shortcode: "fr", continent: "Europe")
        Country.create(name: "Allemagne", shortcode: "de", continent: "Europe")
        Country.create(name: "Grèce", shortcode: "gr", continent: "Europe")
        Country.create(name: "Hong Kong", shortcode: "hk", continent: "Asie")
        Country.create(name: "Hongrie", shortcode: "hu", continent: "Europe")
        Country.create(name: "Inde", shortcode: "in", continent: "Asie")
        Country.create(name: "Indonesie", shortcode: "id", continent: "Asie")
        Country.create(name: "Irelande", shortcode: "ie", continent: "Europe")
        Country.create(name: "Israël", shortcode: "il", continent: "Asie")
        Country.create(name: "Italie", shortcode: "it", continent: "Europe")
        Country.create(name: "Japon", shortcode: "jp", continent: "Asie")
        Country.create(name: "Letonie", shortcode: "lv", continent: "Europe")
        Country.create(name: "Lituanie", shortcode: "lt", continent: "Europe")
        Country.create(name: "Malaisie", shortcode: "my", continent: "Asie")
        Country.create(name: "Mexique", shortcode: "mx", continent: "Amérique")
        Country.create(name: "Maroc ", shortcode: "ma", continent: "Afrique")
        Country.create(name: "Pays-Bas", shortcode: "nl", continent: "Europe")
        Country.create(name: "Nouvelles Zélande", shortcode: "nz", continent: "Océanie")
        Country.create(name: "Nigeria", shortcode: "nq", continent: "Afrique")
        Country.create(name: "Norvège", shortcode: "no", continent: "Europe")
        Country.create(name: "Philippines", shortcode: "ph", continent: "Asie")
        Country.create(name: "Pologne ", shortcode: "pl", continent: "Europe")
        Country.create(name: "Portugal ", shortcode: "pt", continent: "Europe")
        Country.create(name: "Roumanie", shortcode: "ro", continent: "Europe")
        Country.create(name: "Russie", shortcode: "ru", continent: "Asie")
        Country.create(name: "Arabie Saoudite", shortcode: "sa", continent: "Asie")
        Country.create(name: "Serbie", shortcode: "rs", continent: "Europe")
        Country.create(name: "Singapour", shortcode: "sq", continent: "Asie")
        Country.create(name: "Slovaquie", shortcode: "sa", continent: "Europe")
        Country.create(name: "Slovénie", shortcode: "si", continent: "Europe")
        Country.create(name: "Afrique du sud", shortcode: "za", continent: "Afrique")
        Country.create(name: "Corée du sud", shortcode: "kr", continent: "Asie")
        Country.create(name: "Suède", shortcode: "se", continent: "Europe")
        Country.create(name: "Suisse", shortcode: "ch", continent: "Europe") 
        Country.create(name: "Taïwan", shortcode: "tw", continent: "Asie")
        Country.create(name: "Thaïlande", shortcode: "th", continent: "Asie")
        Country.create(name: "Turquie", shortcode: "tr", continent: "Asie")
        Country.create(name: "Emirats Arabes Unis ", shortcode: "ae", continent: "Asie")
        Country.create(name: "Ukraine", shortcode: "ua", continent: "Europe")
        Country.create(name: "Royaume Uni", shortcode: "gb", continent: "Europe")
        Country.create(name: "Etats-Unis", shortcode: "us", continent: "Amérique")
        Country.create(name: "Vénézuela", shortcode: "ve", continent: "Amérique")

    end

	def category
        
		Category.create(name: "Business" , nameFr: "Business")
		Category.create(name: "Entertainment" , nameFr: "Divertissement")
		Category.create(name: "Health" , nameFr: "Santé")
		Category.create(name:"Science", nameFr:"Science")
        Category.create(name:"Sports", nameFr:"Sport")
        Category.create(name:"Technology", nameFr:"Technologie")
	end


	def articleAC

        #initialisation des api
		newsapi = News.new(ENV["API_NEWS_KEY_1"])

        #
        @countries = Country.all.pluck(:shortcode)
        @categories = Category.all.pluck(:name)
        @countries.each do |shortcode|
            if shortcode.match?(/^[a-c]/)
 
                @categories.each do |name|


                    link = 'https://newsapi.org/v2/top-headlines?'\
                    'country=' + shortcode + '&'\
                    'category=' + name + '&'\
                    'apiKey='+ ENV['API_NEWS_KEY_1']
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
   
	end


    def articleDF
  

        #initialisation des api
        newsapi = News.new(ENV["API_NEWS_KEY_2"])

        #
        @countries = Country.all.pluck(:shortcode)
        @categories = Category.all.pluck(:name)
        @countries.each do |shortcode|
            if shortcode.match?(/^[d-f]/)
 
                @categories.each do |name|


                    link = 'https://newsapi.org/v2/top-headlines?'\
                    'country=' + shortcode + '&'\
                    'category=' + name + '&'\
                    'apiKey='+ ENV['API_NEWS_KEY_2']
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
    end


        def articleGI

        #initialisation des api
        newsapi = News.new(ENV["API_NEWS_KEY_3"])

        #
        @countries = Country.all.pluck(:shortcode)
        @categories = Category.all.pluck(:name)
        @countries.each do |shortcode|
            if shortcode.match?(/^[g-i]/)
 
                @categories.each do |name|


                    link = 'https://newsapi.org/v2/top-headlines?'\
                    'country=' + shortcode + '&'\
                    'category=' + name + '&'\
                    'apiKey='+ ENV['API_NEWS_KEY_3']
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
    end


        def articleJL
      
        #initialisation des api
        newsapi = News.new(ENV["API_NEWS_KEY_4"])

        #
        @countries = Country.all.pluck(:shortcode)
        @categories = Category.all.pluck(:name)
        @countries.each do |shortcode|
            if shortcode.match?(/^[j-l]/)
 
                @categories.each do |name|


                    link = 'https://newsapi.org/v2/top-headlines?'\
                    'country=' + shortcode + '&'\
                    'category=' + name + '&'\
                    'apiKey='+ ENV['API_NEWS_KEY_4']
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
   
    end


        def articleMO

        #initialisation des api
        newsapi = News.new(ENV["API_NEWS_KEY_5"])

        #
        @countries = Country.all.pluck(:shortcode)
        @categories = Category.all.pluck(:name)
        @countries.each do |shortcode|
            if shortcode.match?(/^[m-o]/)
 
                @categories.each do |name|


                    link = 'https://newsapi.org/v2/top-headlines?'\
                    'country=' + shortcode + '&'\
                    'category=' + name + '&'\
                    'apiKey='+ ENV['API_NEWS_KEY_5']
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
   
    end


        def articlePR

        #initialisation des api
        newsapi = News.new(ENV["API_NEWS_KEY_6"])

        #
        @countries = Country.all.pluck(:shortcode)
        @categories = Category.all.pluck(:name)
        @countries.each do |shortcode|
            if shortcode.match?(/^[p-r]/)
 
                @categories.each do |name|


                    link = 'https://newsapi.org/v2/top-headlines?'\
                    'country=' + shortcode + '&'\
                    'category=' + name + '&'\
                    'apiKey='+ ENV['API_NEWS_KEY_6']
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
   
    end


        def articleSU
    
        #initialisation des api
        newsapi = News.new(ENV["API_NEWS_KEY_7"])

        #
        @countries = Country.all.pluck(:shortcode)
        @categories = Category.all.pluck(:name)
        @countries.each do |shortcode|
            if shortcode.match?(/^[s-u]/)
 
                @categories.each do |name|


                    link = 'https://newsapi.org/v2/top-headlines?'\
                    'country=' + shortcode + '&'\
                    'category=' + name + '&'\
                    'apiKey='+ ENV['API_NEWS_KEY_7']
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
   
    end


        def articleVX
 
        #initialisation des api
        newsapi = News.new(ENV["API_NEWS_KEY_8"])

        #
        @countries = Country.all.pluck(:shortcode)
        @categories = Category.all.pluck(:name)
        @countries.each do |shortcode|
            if shortcode.match?(/^[v-x]/)
 
                @categories.each do |name|


                    link = 'https://newsapi.org/v2/top-headlines?'\
                    'country=' + shortcode + '&'\
                    'category=' + name + '&'\
                    'apiKey='+ ENV['API_NEWS_KEY_8']
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
   
    end

         def articleYZ
 
        #initialisation des api
        newsapi = News.new(ENV["API_NEWS_KEY_9"])

        #
        @countries = Country.all.pluck(:shortcode)
        @categories = Category.all.pluck(:name)
        @countries.each do |shortcode|
            if shortcode.match?(/^[y-z]/)
 
                @categories.each do |name|


                    link = 'https://newsapi.org/v2/top-headlines?'\
                    'country=' + shortcode + '&'\
                    'category=' + name + '&'\
                    'apiKey='+ ENV['API_NEWS_KEY_9']
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
   
    end



     




country
category
articleAC
articleDF
articleGI
articleJL
articleMO
articlePR
articleSU
articleVX
articleYZ
