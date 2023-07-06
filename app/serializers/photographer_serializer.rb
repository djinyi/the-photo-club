class PhotographerSerializer < ActiveModel::Serializer
  attributes :id, :name, :year

  has_many :photos
  has_many :exhibits, through: :photos
end
