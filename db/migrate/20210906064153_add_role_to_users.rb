class AddRoleToUsers < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :roleable, polymorphic: true
  end
end
