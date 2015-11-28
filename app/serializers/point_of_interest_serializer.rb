class PointOfInterestSerializer < ActiveModel::Serializer
  attribute :name
  attribute :latitude
  attribute :longitude
  attribute :description
  attribute :address
  attribute :phone
  attribute :opening_hours
  attribute :email
  attribute :website
  
  has_many   :tags
  belongs_to :city
  belongs_to :country
end
