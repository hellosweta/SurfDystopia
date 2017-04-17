# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  listing_id :integer          not null
#  author_id  :integer          not null
#  title      :string
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  rating     :float
#

class Review < ApplicationRecord

  validates :listing_id, :author_id, :rating, :title, :body, presence: true
  validates :rating, inclusion: { in: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
      message: " can't be 0" }

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing
end
