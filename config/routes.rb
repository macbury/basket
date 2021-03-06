Rails.application.routes.draw do
  scope '/api', defaults: { format: :json } do
    devise_for :users
    get '/me', to: 'profile#me'
  end

  # Catch all routes for nicer html5 browser history
  get '/*path' => 'home#show'
  root 'home#show'
end
