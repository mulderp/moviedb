class Api::MoviesController < ApplicationController

  respond_to :json

  def index
    movies = Movie.all
    render :json => movies, :each_serializer => MovieSerializer
  end
end
