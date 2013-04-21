class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :category


  def category
    object.category.name
  end

end
