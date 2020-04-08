class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.text :description
      t.float :distance, null: false
      t.integer :time, null: false
      t.integer :elevation, null: false
      t.string :activity_type, null: false
      t.string :route_type, null: false
      t.timestamps
    end
    add_index :routes, :user_id
ç  end
end
