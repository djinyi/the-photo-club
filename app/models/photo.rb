class Photo < ApplicationRecord
    validates :title, presence: true, length: {in: 2..15}

end
