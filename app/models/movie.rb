class Movie < ActiveRecord::Base
  attr_accessible :category_id, :description, :title
end
