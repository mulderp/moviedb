class Movie < ActiveRecord::Base
  attr_accessible :category_id, :description, :title

  belongs_to :category
  belongs_to :user

  has_many :ratings

end
