# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

action = Category.where({ :name => "action", :display_name => "Action" }).first_or_create
comedy = Category.where({ :name => "comedy", :display_name => "Comedy" }).first_or_create
romance = Category.where({ :name => "romance", :display_name => "Romance" }).first_or_create
movie = Movie.create({ :title => "Sleepless in Seattle", :category_id => romance.id})
movie = Movie.create({ :title => "You've got Mail", :category_id => romance.id})
movie = Movie.create({ :title => "When Harry Met Sally", :category_id => romance.id})
movie = Movie.create({ :title => "The Matrix", :category_id => action.id})
movie = Movie.create({ :title => "Beverly Hill Cops II", :category_id => action.id})
