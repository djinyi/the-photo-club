class AddExhibitIdToPhotos < ActiveRecord::Migration[6.1]
  def change
    add_column :photos, :exhibit_id, :integer
  end
end
