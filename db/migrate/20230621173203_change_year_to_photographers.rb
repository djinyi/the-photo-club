class ChangeYearToPhotographers < ActiveRecord::Migration[6.1]
  def change
    change_column :photographers, :year, :string
  end
end
