Rails.application.routes.draw do
  resources :resources, only: [:index, :create]

  get "/resources/search", to: "resources#search"
  post "/tags/search", to: "tags#search"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
