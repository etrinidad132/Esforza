# == Schema Information
#
# Table name: workouts
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  name          :string           not null
#  description   :text
#  distance      :float            not null
#  time          :integer          not null
#  elevation     :integer          not null
#  activity_type :string           not null
#  date_created  :date
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Workout < ApplicationRecord
    validates :user_id, :name, :distance, :time, :elevation, presence: true
    validates :activity_type, inclusion: {in: ["run", "ride", "hike", "walk"]}, allow_nil: true

    ## Associations
    belongs_to :user
end
