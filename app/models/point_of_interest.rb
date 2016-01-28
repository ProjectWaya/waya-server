class PointOfInterest < ActiveRecord::Base
  include TranslationHelper
  has_and_belongs_to_many :tags
  belongs_to :city
  has_one :country, through: :city

  def self.create(opts)
  	if opts.include?(:tags)
  	  tags = opts.fetch(:tags)
  	  
  	  new_tags = []
  	  tags.each do |tag|
  	  	if tag.parent_id != 0
  	  		unless tags.map(&:id).include?(tag.parent_id) || new_tags.map(&:id).include?(tag.parent_id)
  	  		  new_tags << Tag.find(tag.parent_id)
  	  		end
  	  	end
  	  end
  	  tags.concat(new_tags)
  	end
  	super(opts)
  end
end
