require 'dotenv/load'
require 'instabot'


Config.setup do |set|
  set.username             =ENV['API_NAME_ID'] 
  set.password             =ENV['API_PASSWORD'] 
  set.tags                 = %w[developpeur informatique programmation digital]
  
  # set.use_proxy            = true # => it's important to enable the proxy usage
  # set.proxy                = ["localhost",8888] # without username and password
  # set.proxy                = ["localhost",8000,"USERNAME","PASSWORD"] # with username and password
  
  # set.use_tor              = true # default is false

  set.wait_per_action      = 5 * 30
  set.max_like_per_day     = 50
  set.max_follow_per_day   = 1000
  set.max_unfollow_per_day = 500
  set.max_comment_per_day  = 1000
  set.log_status           = true
  set.infinite_tags        = true
  set.add_tag_per_post     = 1
  set.print_banner         = true
  set.pre_load             = false

  set.unwanted_list        = ["_id","free_","free"]
  set.white_list_users     = ["john","alex","nick"]

  set.comments             = [
    ["Apprends à coder gratuitement avec The Hacking Project https://www.thehackingproject.org"],
  ]
end

bot = Instabot.new
bot.mode(:infinite) # => :cleanup, :infinite, ...