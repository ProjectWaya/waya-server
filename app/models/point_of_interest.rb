class PointOfInterest < ActiveRecord::Base
  has_and_belongs_to_many :tags
  belongs_to :city
  has_one :country, through: :city

  def phones
    Array(contact['phones'])
  end

  def mails
    Array(contact['mails'])
  end

  def web_address
    contact['web_address']
  end
end
