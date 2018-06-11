Rails.application.routes.draw do
  
  devise_for :users
  root 'home#homepage'

  get "/index", to: "home#index" , as: "show"
  get "/countries/:id", to:  "countries#show", as: "country"
  resources :devise
  mount ForestLiana::Engine => '/forest'
  resources :home
  
end
