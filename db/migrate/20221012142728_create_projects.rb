class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :image
      t.text :status
      t.string :location
      t.integer :user_id

      t.timestamps
    end
  end
end
