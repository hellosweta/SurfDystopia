class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :listing_id, null: false
      t.integer :author_id, null: false
      t.integer :rating, null: false
      t.string :title
      t.text :body

      t.timestamps
    end
    add_index :reviews, :listing_id
    add_index :reviews, :author_id
  end
end
