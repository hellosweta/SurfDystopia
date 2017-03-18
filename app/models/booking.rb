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
end
