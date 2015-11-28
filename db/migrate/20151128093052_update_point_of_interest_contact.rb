class UpdatePointOfInterestContact < ActiveRecord::Migration
  def change
    change_table :points_of_interest do |t|
      t.string :email
      t.string :website
      t.string :phone
    end
    remove_column :points_of_interest, :contact
  end
end
