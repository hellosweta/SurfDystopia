class RemoveUniqueLatLong < ActiveRecord::Migration[5.0]
  def change
    remove_index :listings, :longitude
    remove_index :listings, :latitude
    add_index :listings, :longitude
    add_index :listings, :latitude
  end
end
