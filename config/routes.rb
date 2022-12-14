Rails.application.routes.draw do
  namespace :api do
    get '/users', to: 'users#index'
    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'
    delete 'logout', to: 'session#destroy'
    post '/login', to: 'session#create'
  
    resources :users, only: [:show]
    resources :projects, only: [:index, :show, :create, :update, :destroy]
  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
