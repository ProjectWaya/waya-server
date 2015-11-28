Rails.application.routes.draw do
  devise_for :users
  root to: 'visitors#index'

  scope "api" do
    scope ":locale" do
      scope "v1" do
        resources :points_of_interest, only: [:index]
        resources :countries, only: [:index]
        resources :tags, only: [:index]
        resources :user_statuses, only: [:index]
      end
    end
  end

  mount TranslationCenter::Engine => "/translation_center"
end
