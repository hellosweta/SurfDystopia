# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  listing_id :integer          not null
#  author_id  :integer          not null
#  rating     :integer          not null
#  title      :string
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord

  validates :listing_id, :author_id, :rating, :description, :region_id, presence: true
  validates :latitude, :longitude, presence: true, uniqueness: true

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  belongs_to :region,
  primary_key: :id,
  foreign_key: :region_id,
  class_name: :Region
end
