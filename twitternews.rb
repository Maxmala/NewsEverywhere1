
require 'twitter'
require 'google_drive'
require 'dotenv'

Dotenv.load

def client

    client = Twitter::REST::Client.new do |config|
        config.consumer_key        = ENV['API_TWITTER_CONSUMER_KEY']
        config.consumer_secret     = ENV['API_TWITTER_CONSUMER_KEY_SECRET']
        config.access_token        = ENV['API_TWITTER_ACCESS_TOKEN']
        config.access_token_secret = ENV['API_TWITTER_ACCESS_TOKEN_SECRET']
      end
end


topics = ["AFP", "googlenews", "infos", "infossansfrontiere", "journaux", "actu", "presse", "news", "Actualités", "ELPais", "Breking news", "CNN"]
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
