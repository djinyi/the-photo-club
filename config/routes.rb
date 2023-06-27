Rails.application.routes.draw do
  # get "/photographers", to: "photographers#index"
  # get "/photographers/:id", to: "photographer#show"
  # get "/photos", to: "photos#index"
  resources :photographers, only: [:index, :show, :create]
  resources :exhibits, only: [:index, :show]
  resources :photos
  # get "/exhibits", to: "exhibits#index"
end
