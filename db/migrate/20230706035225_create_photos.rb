class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :image_url
      t.string :title
      t.integer :year
      t.string :description
      t.string :medium
      t.belongs_to :photographer, null: false, foreign_key: true
      t.belongs_to :exhibit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
