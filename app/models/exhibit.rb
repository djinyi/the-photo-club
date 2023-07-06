class Exhibit < ApplicationRecord
    has_many :photos, dependent: :destroy
    has_many :photographers, through: :photos, dependent: :destroy

end
