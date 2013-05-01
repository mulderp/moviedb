class Api::MoviesController < ApplicationController

  respond_to :json

  def index
    movies = Movie.all
    render :json => movies, :each_serializer => MovieSerializer, :meta => { :total => movies.size }
  end

  def genre
    category = Category.where(:name => params[:genre])
    movies = Movie.where(:category => category)
    render :json => movies, :each_serializer => MovieSerializer, :meta => { :total => movies.size }
  end
end
