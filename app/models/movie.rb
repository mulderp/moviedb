class Movie < ActiveRecord::Base
  attr_accessible :category_id, :description, :title

  include Tire::Model::Search
  include Tire::Model::Callbacks

  has_many :categorizations
  has_many :categories, :through => :categorizations
  belongs_to :user

  has_many :ratings

  mapping do
     indexes :id, type: 'integer'
     indexes :title, boost: 40
     indexes :description, analyzer: 'snowball'
     indexes :categories do
       indexes :id, type: 'integer'
       indexes :name, type: 'string', index: 'not_analyzed'
     end
     indexes :ratings do
       indexes :id, type: 'integer'
       indexes :stars, type: 'integer'
     end
   end

end
