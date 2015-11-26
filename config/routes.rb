Rails.application.routes.draw do
  root to: 'visitors#index'

  scope ":locale" do
    scope "v1" do
      resources :points_of_interest, only: [:index]
      resources :countries, only: [:index]
    end
  end
end
