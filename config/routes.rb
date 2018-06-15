Rails.application.routes.draw do
  
  
 
  get 'articles/show'
  root 'home#homepage'

  get "/index", to: "home#index" , as: "show"
  get "/countries/:id", to:  "countries#show", as: "country"
  post "/countries/:id", to:  "countries#show_filter", as: "categories"
  get "/categories/:id", to:  "categories#show", as: "category"
 
  get 'profil', to: "profile_pages#index", as: "profil"
  get 'profil/settings', to: "profile_pages#settings", as: "settings"
  patch 'profil/settings', to: "profile_pages#set_settings", as: "user"
  get "/profil", to: 'profile_pages#index', as: :user_root
  devise_for :users
  get '/contact', to: "home#contact", as: "contact"
 


  mount ForestLiana::Engine => '/forest'
  
  
end
