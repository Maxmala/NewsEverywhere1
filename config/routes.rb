Rails.application.routes.draw do
  
  
 
  get 'articles/show'
  root 'home#homepage'

  get "/index", to: "home#index" , as: "show"
  get "/countries/:id", to:  "countries#show", as: "country"
  get "/categories/:id", to:  "categories#show", as: "category"
 
  get 'profil', to: "profile_pages#index", as: "profil"
  get 'profil/settings', to: "profile_pages#settings", as: "settings"
  patch 'profil/settings', to: "profile_pages#set_settings", as: "user"


  devise_for :users


  mount ForestLiana::Engine => '/forest'
  
  
end
