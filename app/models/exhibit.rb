class Exhibit < ApplicationRecord
    has_many :photos
    has_many :photographers

end
