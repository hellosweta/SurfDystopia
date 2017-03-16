class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.string :image_url, null: false
      t.text :description, null: false
      t.integer :region_id, null: false
      t.integer :max_guests
      t.string :property_type
      t.text :house_rules

      t.timestamps
    end
    add_index :listings, :host_id, unique: true
    add_index :listings, :longitude, unique: true
    add_index :listings, :latitude, unique: true
  end
end
