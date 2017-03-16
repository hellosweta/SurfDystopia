class RemoveUnique < ActiveRecord::Migration[5.0]
  def change
    remove_index :listings, :host_id
    add_index :listings, :host_id
  end
end
