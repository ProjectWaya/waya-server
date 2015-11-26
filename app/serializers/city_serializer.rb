class CitySerializer < ActiveModel::Serializer

  attributes :name, :key, :zipcode

  belongs_to :country
end