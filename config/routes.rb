Rails.application.routes.draw do
  mount ForestLiana::Engine => '/forest'
  root to: 'visitors#index'
end
