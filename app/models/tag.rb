class Tag < ActiveRecord::Base
  has_and_belongs_to_many :points_of_interest

  has_many :sub_tags, class_name: "Tag", foreign_key: :parent_id
  belongs_to :parent_tag, class_name: "Tag", foreign_key: :parent_id

  default_scope { where.not(id: 0) }

  def category
    case parent_id
    when 0
      :main_category
    when nil
      :tag
    else
      :sub_category
    end
  end

  def name
    "Shelter"
  end

  def description
    "I am a shelter"
  end
end
