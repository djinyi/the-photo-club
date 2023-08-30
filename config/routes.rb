Rails.application.routes.draw do

  resources :photographers
  resources :exhibits, only: [:index, :create, :destroy]
  resources :photos

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
