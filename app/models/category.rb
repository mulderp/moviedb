class Category < ActiveRecord::Base
  attr_accessible :name

  has_many :categorizations
  has_many :movies, :through => :categorizations

  def active_model_serializer
    CategorySerializer
  end
end
