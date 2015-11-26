class RemoveZipFromPointOfInterest < ActiveRecord::Migration
  def change
    remove_column :points_of_interest, :zip
  end
end
