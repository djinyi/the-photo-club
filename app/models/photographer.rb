class Photographer < ApplicationRecord
    validates :name, presence: true, length: {maximum: 15}

end
