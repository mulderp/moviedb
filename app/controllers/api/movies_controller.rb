class Api::MoviesController < ApplicationController

  respond_to :json

  def index
    movies = Movie.all
    render :json => movies, :each_serializer => MovieSerializer, :meta => { :total => movies.size }
  end

  def filter
    category = Category.where(:name => params[:genre])
    movies = Movie.where(:category => category)
    render :json => movies, :each_serializer => MovieSerializer, :meta => { :total => movies.size }
  end

  def search
    movies = Movie.search(params[:q], :load => true)
    logger.info movies
    render :json => movies, :each_serializer => MovieSerializer, :meta => { :total => movies.size }
  end
end
