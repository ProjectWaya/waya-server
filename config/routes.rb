Rails.application.routes.draw do
  scope "v1" do
    scope ":locale" do
      resources :points_of_interest, only: [:index]
    end
  end
end
