class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :title, :year, :description, :medium, :photographer_id, :exhibit_id

  belongs_to :photographer
  belongs_to :exhibit
end
