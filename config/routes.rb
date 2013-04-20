Moviedb::Application.routes.draw do
  root :to => 'welcome#index'

  namespace :api do
    devise_for :users
    resources :movies, :only=>[:index, :show]
  end  

end
