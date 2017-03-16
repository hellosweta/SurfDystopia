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

class Listing < ApplicationRecord
  validates :host_id, :title, :image_url, :description, :region_id, presence: true
  validates :latitude, :longitude, presence: true, uniqueness: true

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  belongs_to :region,
  primary_key: :id,
  foreign_key: :region_id,
  class_name: :Region

  # def self.in_bounds(bounds)
  #   self.where("latitude < ?", bounds[:northEast][:latitude])
  #       .where("latitude > ?", bounds[:southWest][:latitude])
  #       .where("longitude > ?", bounds[:southWest][:longitude])
  #       .where("longitude < ?", bounds[:northEast][:longitude])
  # end

end
