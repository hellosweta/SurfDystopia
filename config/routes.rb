Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:create, :update, :show, :index] do
      member do
        post "search"
      end
      resources :reviews, only: [:index, :show, :create, :destroy]

    end
    resources :regions, only: [:index, :show]
    resources :bookings, only: [:index, :show, :create, :destroy]
  end

  root "static_pages#root"
end
