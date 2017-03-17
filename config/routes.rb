Rails.application.routes.draw do

  namespace :api do
    get 'regions/show'
  end

  namespace :api do
    get 'regions/index'
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:create, :update, :show, :index]
    resources :regions, only: [:index, :show]
  end

  root "static_pages#root"
end
