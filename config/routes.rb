Rails.application.routes.draw do
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
  
  get '*path', to: 'ember#index', constraints: { format: 'html' }
  get '/',     to: 'ember#index', constraints: { format: 'html' }
end
