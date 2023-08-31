class Exhibit < ApplicationRecord
    has_many :photographs, dependent: :destroy
    has_many :users, through: :photographs, dependent: :destroy

end
