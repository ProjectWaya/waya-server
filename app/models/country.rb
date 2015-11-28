class Country < ActiveRecord::Base
  include TranslationHelper
  has_many :cities
end
