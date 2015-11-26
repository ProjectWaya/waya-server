class ChangeCountryIdToInteger < ActiveRecord::Migration
  def change
    remove_column :cities, :country_id, :integer
    add_column :cities, :country_id, :integer
  end
end
