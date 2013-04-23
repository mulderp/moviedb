class Category < ActiveRecord::Base
  attr_accessible :name

  has_many :movies

  def active_model_serializer
    CategorySerializer
  end
end
