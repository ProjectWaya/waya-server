class RemoveZipcodeFromCity < ActiveRecord::Migration
  def change
    remove_column :cities, :zipcode
  end
end
