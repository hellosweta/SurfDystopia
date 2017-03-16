Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:create, :update, :show, :index]
  end

  root "static_pages#root"
end
