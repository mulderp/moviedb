class Api::GenresController < ApplicationController

  respond_to :json

  def show
    category = Category.where(:name => params[:id]).first
    puts category.inspect
    movies = Movie.where(:category_id => category.id)
    render :json => movies, :each_serializer => MovieSerializer, :meta => { :total => movies.size }, :root => 'movies'
  end
end
