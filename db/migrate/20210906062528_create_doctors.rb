class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
      t.string :full_name
      t.decimal :lon
      t.decimal :lat
      t.timestamps
    end
  end
end
