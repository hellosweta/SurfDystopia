Rails.application.routes.draw do

  get 'reviews/create'

  get 'reviews/destroy'

  get 'reviews/index'

  get 'reviews/show'

  get 'bookings/create'

  get 'bookings/index'

  get 'bookings/show'

  get 'bookings/destroy'

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
    resources :reviews, only: [:index, :show, :create, :destroy]
    resources :bookings, only: [:index, :show, :create, :destroy]
  end

  root "static_pages#root"
end
