class PointOfInterestSerializer < ActiveModel::Serializer

  attributes :name, :latitude, :longitude, :description, :address, :phones,
             :opening_hours, :mails, :web_address

  has_many   :tags
  belongs_to :city
  belongs_to :country
end