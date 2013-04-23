class CategorySerializer < ActiveModel::Serializer
  attributes :name, :total

  def total
    Movie.where(:category_id => object).count
  end


end
