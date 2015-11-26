class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :key
      t.integer :sortno

      t.timestamps null: false
    end
    add_index :tags, :key, unique: true
  end
end
