class PointOfInterest < ActiveRecord::Base
  has_and_belongs_to_many :tags
  belongs_to :city
  has_one :country, though: :city
end
