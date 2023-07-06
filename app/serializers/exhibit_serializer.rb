class ExhibitSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :date

  has_many :photos, dependent: :destroy
  has_many :photographers, through: :photos, dependent: :destroy
end
