# == Schema Information
#
# Table name: listings
#
#  id            :integer          not null, primary key
#  host_id       :integer          not null
#  title         :string           not null
#  longitude     :float            not null
#  latitude      :float            not null
#  image_url     :string           not null
#  description   :text             not null
#  region_id     :integer          not null
#  max_guests    :integer
#  property_type :string
#  house_rules   :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
