Rails.application.routes.draw do
  root 'home#index'
  mount ForestLiana::Engine => '/forest'
  
end
