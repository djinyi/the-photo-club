class ExhibitSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :date

  has_many :photos
end
