Rails.application.routes.draw do
  root to: 'visitors#index'

  scope "api" do
    scope ":locale" do
      scope "v1" do
        resources :points_of_interest, only: [:index]
        resources :countries, only: [:index]
        resources :tags, only: [:index]
      end
    end
  end
end
