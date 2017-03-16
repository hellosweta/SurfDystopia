# == Schema Information
#
# Table name: regions
#
#  id         :integer          not null, primary key
#  city       :string           not null
#  state      :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class RegionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
