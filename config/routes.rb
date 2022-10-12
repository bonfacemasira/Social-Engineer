Rails.application.routes.draw do
  
  resources :projects
  resources :users
  
  post '/signup', to: 'user#create'
  get '/me', to: 'user#show'
  
  delete 'logout', to: 'session#destroy'
  post '/login', to: 'session#create'
  get '/me', to:'session#show'
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
