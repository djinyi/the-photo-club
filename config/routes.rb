Rails.application.routes.draw do
  # get "/photographers", to: "photographers#index"
  # get "/photographers/:id", to: "photographer#show"
  # get "/photos", to: "photos#index"
  resources :photographers do
    resources :photos
  end

  resources :exhibits, only: [:index, :show, :create]
  resources :photos
  # get "/exhibits", to: "exhibits#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to "sessions#destroy"
end
