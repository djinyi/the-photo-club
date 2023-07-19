class Photo < ApplicationRecord
  belongs_to :photographer
  belongs_to :exhibit
  belongs_to :user

  validates :title, presence: true, length: {in: 2..15}

end
