class ExhibitPhotoSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :medium, :photographer

  belongs_to :photographer
end
