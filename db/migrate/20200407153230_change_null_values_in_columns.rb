class ChangeNullValuesInColumns < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:users, :fname, true)
    change_column_null(:users, :lname, true)
    change_column_null(:users, :birthday, true)
    change_column_null(:users, :location, true)
    change_column_null(:users, :gender, true)
  end
end
