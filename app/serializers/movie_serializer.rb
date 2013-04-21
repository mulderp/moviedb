class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :description, :stars

  def category
    object.category.name
  end

  def stars
    object.ratings.average(:stars)
  end

end
