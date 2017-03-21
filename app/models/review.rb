
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

  validates :listing_id, :author_id, :rating, presence: true
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5] }
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing
end
