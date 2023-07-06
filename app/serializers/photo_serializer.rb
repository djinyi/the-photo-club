class PhotoSerializer < ActiveModel::Serializer
  attributes :image_url, :title, :year, :description, :medium, :photographer_id, :exhibit_id
end
