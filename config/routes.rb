Rails.application.routes.draw do
  scope format: :json do
    devise_for :users
  end

  get 'hello_world', to: 'hello_world#index'
end
