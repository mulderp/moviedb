class Api::AccountsController < ApplicationController
  def show
    if current_user
      render :json => current_user.movies, :each_serializer => MovieSerializer, :root => "movies"
    else
      render :json => { :errors => "not logged in"}, :code => 404
    end
  end
end
