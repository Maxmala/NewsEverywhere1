Rails.application.routes.draw do
  root 'home#homepage'
  get "/index", to: "home#index" , as: "show"
  mount ForestLiana::Engine => '/forest'
  resources :home
  
end
