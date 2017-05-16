require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    before(:each) do
      User.create!(username: 'hello_sweta2', name: 'Sweta', password: 'password')
    end
    it { should validate_presence_of(:username) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe 'associations ' do
    it { should have_many(:listings) }
    it { should have_many(:reviews) }
    it { should have_many(:bookings) }

  end
end
