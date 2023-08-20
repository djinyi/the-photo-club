class PhotographerSerializer < ActiveModel::Serializer
  attributes :id, :name, :year

  has_many :exhibits
end
