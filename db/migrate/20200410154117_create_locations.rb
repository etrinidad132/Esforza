class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.integer :route_id, null: false
      t.integer :sequence, null: false
      t.float :lat, null: false 
      t.float :lng, null: false
      t.timestamps
    end
    add_index :locations, :route_id
  end
end
