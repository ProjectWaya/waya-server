class ChangeCityColumn < ActiveRecord::Migration
  def change
    remove_column :points_of_interest, :country
    remove_column :points_of_interest, :city
    add_reference :points_of_interest, :city, index: true, foreign_key: true
  end
end
