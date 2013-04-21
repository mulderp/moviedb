class Rating < ActiveRecord::Base
  attr_accessible :author_id, :movie_id, :stars

  belongs_to :author, class_name: User
  belongs_to :movie

end
