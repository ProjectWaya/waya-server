class City < ActiveRecord::Base
  belongs_to :country

  def name
    "Paris"
  end
end
