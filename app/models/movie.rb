class Movie < ActiveRecord::Base
  attr_accessible :category_id, :description, :title

  belongs_to :category
  has_many :ratings

end
