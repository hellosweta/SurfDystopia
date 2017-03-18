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
#  latitude   :float
#  longitude  :float
#

class Region < ApplicationRecord

  has_many :listings,
  primary_key: :id,
  foreign_key: :region_id,
  class_name: :Listing

end
