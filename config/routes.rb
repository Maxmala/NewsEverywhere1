Rails.application.routes.draw do
  
  
 
  root 'home#homepage'

  get "/index", to: "home#index" , as: "show"
  get "/countries/:id", to:  "countries#show", as: "country"
  get "/categories/:id", to:  "categories#show", as: "category"
  get "/articles/:id", to:  "articles#show", as: "article"
  get 'profil', to: "profiles_pages#index", as: "profil"
  get 'profil/settings', to: "profile_pages#settings", as: "settings"

  devise_for :users


  mount ForestLiana::Engine => '/forest'
  
  
end
