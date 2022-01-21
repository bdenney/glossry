class AddTypeToResources < ActiveRecord::Migration[7.0]
  def change
    add_column :resources, :type, :integer
  end
end
