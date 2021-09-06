class CreateScripts < ActiveRecord::Migration[6.1]
  def change
    create_table :scripts do |t|
      t.string :title
      t.string :author
      t.string :script_type
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
