class CreateTagAssociations < ActiveRecord::Migration[7.0]
  def change
    create_table :tag_associations do |t|
      t.references :tag, null: false, foreign_key: true
      t.references :resource, null: false, foreign_key: true
    end
  end
end
