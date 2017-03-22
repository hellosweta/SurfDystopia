# == Schema Information
#
# Table name: bookings
#
#  id             :integer          not null, primary key
#  listing_id     :integer          not null
#  user_id        :integer          not null
#  check_in_date  :date             not null
#  check_out_date :date             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Booking < ApplicationRecord
  validates :listing_id, :user_id, :check_in_date, :check_out_date, presence: true
  validate :check_out_must_come_after_check_in
  validate :does_not_overlap_existing_booking

  belongs_to :guest,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing

  def overlapping_bookings
    Booking
      .where.not(id: self.id)
      .where(listing_id: listing_id)
      .where(<<-SQL, check_in_date: check_in_date, check_out_date: check_out_date)
         NOT( (check_in_date > :check_out_date) OR (check_out_date < :check_in_date) )
      SQL
  end

  def does_not_overlap_existing_booking
    unless overlapping_bookings.empty?
      errors[:base] << "Booking request conflicts with existing booking"
    end
  end

  def check_out_must_come_after_check_in
    return if check_out_date.blank? || check_in_date.blank?
    if check_in_date > check_out_date
      errors[:check_out_date] << "Check-out must be after check-in, Surfer"
    end
  end

end
