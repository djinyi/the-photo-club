class ExhibitPhotoSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :medium, :photographer, :image_url

  belongs_to :photographer
end
