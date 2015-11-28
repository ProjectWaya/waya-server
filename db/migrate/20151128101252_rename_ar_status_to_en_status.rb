class RenameArStatusToEnStatus < ActiveRecord::Migration
  def change
    rename_column :translation_center_translation_keys, :ar_status, :en_status
  end
end
