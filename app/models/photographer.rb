class Photographer < ApplicationRecord
    has_many :photos, dependent: :destroy
    has_many :exhibits, through: :photos, dependent: :destroy
    has_one :user
    validates :name, presence: true, length: {maximum: 15}

end
