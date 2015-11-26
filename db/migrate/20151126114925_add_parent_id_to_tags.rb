class AddParentIdToTags < ActiveRecord::Migration
  def change
    add_column :tags, :parent_id, :integer
    add_foreign_key :tags, :tags, column: :parent_id
  end
end
