class Country < ActiveRecord::Base
  has_many :cities

  def name
    "Austria"
  end
end
