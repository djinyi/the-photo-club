class User < ApplicationRecord
    has_many :photographs, dependent: :destroy
    has_many :exhibit, through: :photographs, dependent: :destroy

    has_secure_password

    validates :username, presence: true, uniqueness: true, length: {in: 2..15}
end
