# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  route_id   :integer          not null
#  sequence   :integer          not null
#  lat        :float            not null
#  lng        :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Location < ApplicationRecord
    validates :route_id, :sequence, :lat, :lng, presence: true

    belongs_to :route
end
