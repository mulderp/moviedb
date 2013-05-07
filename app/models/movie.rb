class Movie < ActiveRecord::Base
  attr_accessible :category_id, :category, :description, :title

  belongs_to :category
  belongs_to :user

  has_many :ratings

  include Tire::Model::Search
  include Tire::Model::Callbacks

  mapping do
    indexes :id, type: 'integer'
    indexes :category_id, type: 'integer'
    indexes :genre_name
    indexes :description
    indexes :rating, type: 'float'
  end

  def self.search(params)
    tire.search(:page => params[:page], :per_page => 10) do |s|
      s.query { string params[:q], default_operator: "AND" } if params[:query].present?
      s.filter :range, :rating => { :from => 2}
      s.facet "categories" do
        terms :category_id
      end
      s.facet "ratings" do
        histogram :rating, :interval => 1.0
      end

      # raise s.to_curl
    end
  end

  def to_indexed_json
    to_json(:include => [:category => { :only => :name }, :ratings => { :only => :stars }], :methods => [:rating])
  end

  def genre_name
    category.name
  end

  def rating
    ratings.average(:stars)
  end

  def rating_stars
    ratings.collect { |r| r.stars }
  end

end
