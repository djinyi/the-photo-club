class User < ApplicationRecord
    belongs_to :photographer
    
    has_secure_password

    validates :username, presence: true, uniqueness: true
end
