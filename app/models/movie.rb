class Movie < ActiveRecord::Base
  attr_accessible :category_id, :description, :title

  belongs_to :category
  belongs_to :user

  has_many :ratings

  include Tire::Model::Search
  include Tire::Model::Callbacks

  def to_indexed_json
    to_json(:include => [:category => { :only => :name }, :ratings => { :only => :stars }])
  end

end
