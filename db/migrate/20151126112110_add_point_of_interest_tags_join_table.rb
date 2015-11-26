class AddPointOfInterestTagsJoinTable < ActiveRecord::Migration
  def change
    create_join_table :points_of_interest, :tags do |t|
      t.index :point_of_interest_id
      t.index :tag_id
    end
  end
end
