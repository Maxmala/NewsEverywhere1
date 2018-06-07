# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def country
        Country.create(name: "Argentine", shortcode: "ar")
        Country.create(name: "Australie", shortcode: "au")
        Country.create(name: "Autriche", shortcode: "at")
        Country.create(name: "Belgique", shortcode: "be")
        Country.create(name: "Brésil", shortcode: "br")
        Country.create(name: "Bulgarie", shortcode: "bg")
        Country.create(name: "Canada", shortcode: "ca")
        Country.create(name: "Chine", shortcode: "cn")
        Country.create(name: "Colombie", shortcode: "co")
        Country.create(name: "Cuba", shortcode: "cu")
        Country.create(name: "Republique Tchèque ", shortcode: "cz")
        Country.create(name: "Egypte", shortcode: "eg")
        Country.create(name: "France", shortcode: "fr")
        Country.create(name: "Allemagne", shortcode: "de")
        Country.create(name: "Grèce", shortcode: "gr")
        Country.create(name: "Hong Kong", shortcode: "hk")
        Country.create(name: "Hongrie", shortcode: "hu")
        Country.create(name: "Inde", shortcode: "in")
        Country.create(name: "Indonesie", shortcode: "id")
        Country.create(name: "Irelande", shortcode: "ie")
        Country.create(name: "Israël", shortcode: "il")
        Country.create(name: "Italie", shortcode: "it")
        Country.create(name: "Japon", shortcode: "jp")
        Country.create(name: "Letonie", shortcode: "lv")
        Country.create(name: "Lituanie", shortcode: "lt")
        Country.create(name: "Malaisie", shortcode: "my")
        Country.create(name: "Mexique", shortcode: "mx")
        Country.create(name: "Maroc ", shortcode: "ma")
        Country.create(name: "Pays-Bas", shortcode: "nl")
        Country.create(name: "Nouvelles Zélande", shortcode: "nz")
        Country.create(name: "Nigeria", shortcode: "nq")
        Country.create(name: "Norvège", shortcode: "no")
        Country.create(name: "Philippines", shortcode: "ph")
        Country.create(name: "Pologne ", shortcode: "pl")
        Country.create(name: "Portugal ", shortcode: "pt")
        Country.create(name: "Roumanie", shortcode: "ro")
        Country.create(name: "Russie", shortcode: "ru")
        Country.create(name: "Arabie Saoudite", shortcode: "sa")
        Country.create(name: "Serbie", shortcode: "rs")
        Country.create(name: "Singapour", shortcode: "sq")
        Country.create(name: "Slovaquie", shortcode: "sa")
        Country.create(name: "Slovénie", shortcode: "si")
        Country.create(name: "Afrique du sud", shortcode: "za")
        Country.create(name: "Corée du sud", shortcode: "kr")
        Country.create(name: "Suède", shortcode: "se")
        Country.create(name: "Suisse", shortcode: "ch")    
        Country.create(name: "Taïwan", shortcode: "tw")
        Country.create(name: "Thaïlande", shortcode: "th")
        Country.create(name: "Turquie", shortcode: "tr")
        Country.create(name: "Emirats Arabes Unis ", shortcode: "ae")
        Country.create(name: "Ukraine", shortcode: "ua")
        Country.create(name: "Royaume unis", shortcode: "gb")
        Country.create(name: "Etats-Unis", shortcode: "us")
        Country.create(name: "Vénézuela", shortcode: "ve")

    end

	def category
		Category.create(name: "Business" , nameFr: "Business")
		Category.create(name: "Entertainment" , nameFr: "Divertissement")
		Category.create(name: "Health" , nameFr: "Santé")
		Category.create(name:"Science", nameFr:"Science")
        Category.create(name:"Sports", nameFr:"Sport")
        Category.create(name:"Technology", nameFr:"Technologie")


	end

	def article
		
	end
country
category
