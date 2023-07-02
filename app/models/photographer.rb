class Photographer < ApplicationRecord
    has_many :photos 
    has_many :exhibits, through: :photos
    validates :name, presence: true, length: {maximum: 15}

end
