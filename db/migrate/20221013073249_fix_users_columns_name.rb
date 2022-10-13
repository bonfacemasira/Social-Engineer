class FixUsersColumnsName < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :licence_number, :license_number
  end
end
