class PointOfInterest < ActiveRecord::Base
  include TranslationHelper
  has_and_belongs_to_many :tags
  belongs_to :city
  has_one :country, through: :city
end
