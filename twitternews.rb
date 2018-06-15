
require 'twitter'
require 'google_drive'
require 'dotenv'

Dotenv.load

def client

    client = Twitter::REST::Client.new do |config|
        config.consumer_key        = ENV['']
        config.consumer_secret     = ENV['']
        config.access_token        = ENV['']
        config.access_token_secret = ENV['']
      end
end


topics = ["AFP", "googlenews", "info", "infossansfrontiere", "informatique", "actu", "presse", "news", "Times", "ELPais", "Breking news", "CNN"]
client.filter(track: topics.join(",")) do |object|
  puts object.text if object.is_a?(Twitter::Tweet)
end

client.user do |object|
  case object
  when Twitter::Tweet
    puts " Bonjour, toutes les informations du monde sur une seule page ? Rejoignez-nous: https://infossansfrontiere.herokuapp.com/   "
  when Twitter::DirectMessage
    puts "  Bonjour, toutes les informations du monde sur une seule page ? Rejoignez-nous: https://infossansfrontiere.herokuapp.com/   "
  when Twitter::Streaming::StallWarning
    warn "  Bonjour, toutes les informations du monde sur une seule page ? Rejoignez-nous: https://infossansfrontiere.herokuapp.com/   "
  end
end
