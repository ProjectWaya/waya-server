class CreateUserStatuses < ActiveRecord::Migration
  def change
    create_table :user_statuses do |t|
      t.string :key

      t.timestamps null: false
    end
    add_index :user_statuses, :key, unique: true
  end
end
