# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

categories = %w{Western History Thriller Fantasy SciFi Action Romance Drama Comedy}
categories.each do |category|
  c = Category.where(:name => category.downcase).first_or_create
  c.display_name = category
  c.save
end

Genres = categories.inject({}) { |genres, name| genres[name.downcase.to_sym] = Category.where(:name => name.downcase).first; genres }

# romances
["Sleepless in Seattle", "You've got Mail", "When Harry Met Sally"].each do |m|
  m = Movie.where(:title => m).first_or_create
  puts m.inspect
  m.category = Genres[:romance]
  m.save
end

# action
["The Matrix", "Beverly Hill Cops II"].each do |m|
  m = Movie.where(:title => m).first_or_create
  m.category = Genres[:action]
  puts m.inspect
  m.save
end

# western
["The Wild Wild West","Into the West"].each do |m|
  m = Movie.where(:title => m).first_or_create
  m.category = Genres[:western]
  puts m.inspect
  m.save
end

# comedies
[ "Where Was Spring?", "The Robinsons", "Who's on Deck", "The Real Whatever", "Yes, Prime Minister", "Tiny Plastic Men", "The Secret Lives of Men", "Wai! Wai! Wai!", "Wildboyz", "The Simpsons"].each do |m|
  m = Movie.where(:title => m).first_or_create
  m.category = Genres[:comedy]
  puts m.inspect
  m.save
end


# scifi
["Code Name: Eternity", "Galaxy Park", "The Munsters", "Voltron Force", "Century City", "The Incredible Hulk", "Doctor Who", "Ulysse 31", "Scavengers", "Space Angel", "Hulk", "Max Headroom", "Room 9"].each do |m|
  m = Movie.where(:title => m).first_or_create
  m.category = Genres[:scifi]
  puts m.inspect
  m.save
end

# drama
[ "The Blue Knight", "The Extreme Truth", "Murdoch Mysteries", "Black Silk", "City of Vice", "Looking After Jo Jo", "State Coroner", "Best Friends"].each do |m|
  m = Movie.where(:title => m).first_or_create
  m.category = Genres[:drama]
  puts m.inspect
  m.save
end

# thriller
["A Time of Day", "Look Up in the Sky", "Femme Fatales", "Dirty Bomb Diaries", "Adrenalina", "Miami Vice", "Bird of Prey", "Century Falls", "Lost Angels", "My Friend Charles"].each do |m|
  m = Movie.where(:title => m).first_or_create
  m.category = Genres[:thriller]
  puts m.inspect
  m.save
end
