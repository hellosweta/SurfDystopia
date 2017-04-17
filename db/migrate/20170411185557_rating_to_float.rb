class RatingToFloat < ActiveRecord::Migration[5.0]
  def change
    remove_column :reviews, :rating
    add_column :reviews, :rating, :float
  end
end
