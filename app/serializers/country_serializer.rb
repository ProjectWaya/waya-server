class CountrySerializer < ActiveModel::Serializer

  attributes :name, :key

  has_many :cities
end