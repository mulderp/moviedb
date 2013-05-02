require 'json'
require 'imdb'

namespace :movies do

  desc "Get Movie from IMDB"
  task :by_title do
    movies = Imdb::Gateway.get_by_title ENV['title']
   
    puts movies.inspect
    puts movies.first.fetch('title')
    puts movies.first.fetch('genres').inspect
  end

  desc "Import movies"
  task :import do
    file = File.new(ENV['file'])
    redis = Redis.new
    file.each_line do |l|
      if l =~ /^"(.*)"/
        puts $1
        # redis.zincrby 'movies:title', 1, $1
      end
    end

    # CSV.parse(file) do |row|
    #   puts row.inspect
    # end
  end
end
