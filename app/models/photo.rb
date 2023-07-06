class Photo < ApplicationRecord
  belongs_to :photographer
  belongs_to :exhibit

  validates :title, presence: true, length: {in: 2..15}

end
