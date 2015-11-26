class AddIndexToCountryId < ActiveRecord::Migration
  def change
    add_index :cities, :country_id
  end
end
