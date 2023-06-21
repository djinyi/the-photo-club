Rails.application.routes.draw do
  get "/photographers", to: "photographers#index"
  get "/photographers/:id", to: "photographer#show"
  get "/photos", to: "photos#index"
  get "/exhibits", to: "exhibits#index"
end
