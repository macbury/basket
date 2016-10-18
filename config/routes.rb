Rails.application.routes.draw do
  scope format: :json do
    devise_for :users
  end

  get 'hello_world', to: 'hello_world#index'

  # Catch all routes for nicer html5 browser history
  get '/*path' => 'home#show'
  root 'home#show'
end
