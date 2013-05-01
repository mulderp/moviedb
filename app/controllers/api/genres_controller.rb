class Api::GenresController < ApplicationController

  respond_to :json

  def show
    category = Category.where(:name => params[:id]).first
    puts category.inspect
    movies = Movie.where(:category_id => category.id)
    render :json => { :movies => movies, :meta => { :total => movies.size}}, :each_serializer => MovieSerializer, :root => false
  end
end
