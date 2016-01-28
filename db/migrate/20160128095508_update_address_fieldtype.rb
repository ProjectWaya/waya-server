class UpdateAddressFieldtype < ActiveRecord::Migration
  def change
    remove_column :points_of_interest, :opening_hours
    change_table :points_of_interest do |t|
      t.string :opening_hours
    end
  end
end
