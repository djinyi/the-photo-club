class AddPhotographerIdToPhotos < ActiveRecord::Migration[6.1]
  def change
    add_column :photos, :photographer_id, :integer
  end
end
