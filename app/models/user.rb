# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  name               :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  about_me           :text
#  image_url          :string
#  region_id          :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord

  attr_reader :password

  validates :username, :name, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many :listings,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :Listing

  has_many :reviews,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Review

  has_many :bookings,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Booking

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def new_session_token
    SecureRandom.base64(16)
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end

end
