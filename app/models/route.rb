# == Schema Information
#
# Table name: routes
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  name          :string           not null
#  description   :text
#  distance      :float            not null
#  time          :integer          not null
#  elevation     :integer          not null
#  activity_type :string           not null
#  route_type    :string           not null
#  thumbnail     :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Route < ApplicationRecord
    validates :user_id, :name, :distance, :time, :elevation, presence: true
    validates :activity_type, inclusion: { in: ["ride", "run"]}, allow_nil: true
    validates :route_type, inclusion: { in: ["road", "MTB", "cyclocross", "road", "trail"]}, allow_nil: true


    ## Associations
    belongs_to :user
    has_many :locations
end
