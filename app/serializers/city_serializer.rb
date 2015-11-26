class CitySerializer < ActiveModel::Serializer

  attributes :name, :key

  belongs_to :country
end