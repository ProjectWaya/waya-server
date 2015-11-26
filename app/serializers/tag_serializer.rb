class TagSerializer < ActiveModel::Serializer

  attributes :sortno, :category, :name, :description

  belongs_to :parent_tag
end