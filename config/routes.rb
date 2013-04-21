Moviedb::Application.routes.draw do
  get "movies/index"

  root :to => 'welcome#index'

  namespace :api do
    devise_for :users
    resources :movies, :only=>[:index, :show]
  end  

end
