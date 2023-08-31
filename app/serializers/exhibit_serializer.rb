class ExhibitSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :date

  has_many :photographs
  has_many :users

end
