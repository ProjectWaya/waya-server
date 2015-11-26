class CreatePointsOfInterest < ActiveRecord::Migration
  def change
    create_table :points_of_interest do |t|
      t.string :key
      t.float :latitude
      t.float :longitude
      t.string :address
      t.string :zip
      t.string :city
      t.string :country
      t.json :contact
      t.json :opening_hours

      t.timestamps null: false
    end
    add_index :points_of_interest, :key, unique: true
    add_index :points_of_interest, :city
    add_index :points_of_interest, :country
  end
end
