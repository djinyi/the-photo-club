npmmclass CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :image_url
      t.string :title
      t.integer :year
      t.string :description
      t.string :medium

      t.timestamps
    end
  end
end
