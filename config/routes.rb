Rails.application.routes.draw do
  # get "/photographers", to: "photographers#index"
  # get "/photographers/:id", to: "photographer#show"
  # get "/photos", to: "photos#index"
  resources :photographers do
    resources :photos, only: [:show, :index]
  end

  resources :exhibits, only: [:index, :show]
  resources :photos
  # get "/exhibits", to: "exhibits#index"
end
