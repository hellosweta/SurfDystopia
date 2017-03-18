class AddRegionLatLong < ActiveRecord::Migration[5.0]
  def change
    add_column :regions, :latitude, :float
    add_column :regions, :longitude, :float

  end
end
