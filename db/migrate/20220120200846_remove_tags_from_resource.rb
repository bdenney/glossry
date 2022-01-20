class RemoveTagsFromResource < ActiveRecord::Migration[7.0]
  def change
    remove_column :resources, :tags, :string
  end
end
