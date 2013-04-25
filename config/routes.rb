Moviedb::Application.routes.draw do
  get "movies/index"

  root :to => 'welcome#index'

  namespace :api do
    devise_for :users
    resources :movies, :only=>[:index, :show]
  end  

  devise_for :users
  devise_scope :user do
    get '/login', :to => 'devise/sessions#new'
    get '/logout', :to => 'devise/sessions#destroy'
    get '/signup', :to => 'devise/registrations#new'
  end

end
