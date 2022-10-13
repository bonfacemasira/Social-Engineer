Rails.application.routes.draw do
  
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  
  delete 'logout', to: 'session#destroy'
  post '/login', to: 'session#create'
  get '/me', to:'session#show'

  resources :projects, only: [:index, :show, :create, :update, :destroy]
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
