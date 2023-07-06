class PhotographerSerializer < ActiveModel::Serializer
  attributes :id, :name, :year

  has_many :photos, dependent: :destroy
  has_many :exhibits, through: :photos, dependent: :destroy
end
