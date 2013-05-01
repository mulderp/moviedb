require 'json'
require 'imdb'

namespace :movies do

  desc "Get Movie from IMDB"
  task :by_title do
    movies = Imdb::Gateway.get_by_title ENV['title']
   
    puts movies.first.fetch('title')
    puts movies.first.fetch('genres').inspect
  end
end
