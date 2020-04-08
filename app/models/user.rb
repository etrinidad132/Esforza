# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  fname           :string
#  lname           :string
#  gender          :string
#  location        :integer
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  birthday        :string
#
class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :gender, inclusion: { in: ["M","F", "Other"]}, allow_nil: true
    validates :password, length: { minimum: 6, allow_nil: true}

    attr_reader :password
    after_initialize :ensure_session_token

    ## Associations

    has_many :routes

    ## Class Methods

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    ## Instance Methods

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypted = BCrypt::Password.new(self.password_digest)
        bcrypted.is_password?(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end

###### CONTINUE USER AUTH
