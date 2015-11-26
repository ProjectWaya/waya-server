class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :key
      t.string :country_id

      t.timestamps null: false
    end
  end
end
