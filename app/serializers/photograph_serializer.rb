class PhotographSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :title, :year, :description, :medium, :user_id, :exhibit_id, :user_id

  belongs_to :user
  belongs_to :exhibit

end
