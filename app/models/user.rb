class User < ApplicationRecord
    has_many :photos

    has_secure_password

    validates :username, presence: true, uniqueness: true, length: {in: 2..15}
end
