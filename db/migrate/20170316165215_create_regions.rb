class CreateRegions < ActiveRecord::Migration[5.0]
  def change
    create_table :regions do |t|
      t.string :city, null: false
      t.string :state, null: false
      t.string :image_url, null: false 

      t.timestamps
    end
  end
end
