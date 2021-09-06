class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :bio
      t.string :age
      t.references :script, null: false, foreign_key: true

      t.timestamps
    end
  end
end
