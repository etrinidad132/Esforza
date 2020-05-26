class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.text :description
      t.float :distance, null: false
      t.integer :time, null: false
      t.integer :elevation, null: false
      t.string :activity_type, null: false
      t.date :date_created
      t.timestamps
    end
    add_index :workouts, :user_id
  end
end
