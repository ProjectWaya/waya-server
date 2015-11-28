class City < ActiveRecord::Base
  include TranslationHelper
  belongs_to :country
end
