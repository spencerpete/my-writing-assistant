class CreateScenes < ActiveRecord::Migration[6.1]
  def change
    create_table :scenes do |t|
      t.string :title
      t.string :setting
      t.string :description
      t.text :characters, array: true, default: []
      t.references :act, null: false, foreign_key: true

      t.timestamps
    end
  end
end
