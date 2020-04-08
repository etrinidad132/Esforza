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
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
