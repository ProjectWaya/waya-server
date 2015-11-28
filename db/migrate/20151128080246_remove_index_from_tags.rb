class RemoveIndexFromTags < ActiveRecord::Migration
  def change
    remove_index :tags, :key
    add_index :tags, [:key, :parent_id], unique: true
  end
end
