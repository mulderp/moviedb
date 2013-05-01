class CategorySerializer < ActiveModel::Serializer
  attributes :display_name, :name, :total

  def total
    Movie.where(:category_id => object).count
  end


end
