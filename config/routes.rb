Rails.application.routes.draw do
  resources :points_of_interest
  root to: 'visitors#index'

  scope "v1" do
    scope ":locale" do
      resources :points_of_interest, only: [:index]
    end
  end
end
