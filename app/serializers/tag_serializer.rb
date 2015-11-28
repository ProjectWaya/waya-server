class TagSerializer < ActiveModel::Serializer

  attributes :sortno, :category, :name, :description, :key

  belongs_to :parent_tag
end
