class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false
      t.integer :user_id, null: false
      t.date :check_in_date, null: false
      t.date :check_out_date, null: false

      t.timestamps
    end
    add_index :bookings, :listing_id
    add_index :bookings, :user_id
  end
end
