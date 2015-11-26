class AddIndexForKey < ActiveRecord::Migration
  def change
    add_index :cities, :key, unique: true
    add_index :countries, :key, unique: true
  end
end
