Moviedb::Application.routes.draw do
  get "accounts/show"

  get "movies/index"

  root :to => 'welcome#index'

  namespace :api do
    devise_for :users
    resources :movies, :only => [ :index ]
    resources :genres, :only => [:index, :show]
    resource :account, :only => [:show] do
      resources :movies, :only => [:index, :show]
    end
  end  

  devise_for :users
  devise_scope :user do
    get '/login', :to => 'devise/sessions#new'
    get '/logout', :to => 'devise/sessions#destroy'
    get '/signup', :to => 'devise/registrations#new'
  end

end
