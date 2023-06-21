class CreateExhibits < ActiveRecord::Migration[6.1]
  def change
    create_table :exhibits do |t|
      t.string :name
      t.string :location
      t.string :date

      t.timestamps
    end
  end
end
