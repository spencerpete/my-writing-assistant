class CreateActs < ActiveRecord::Migration[6.1]
  def change
    create_table :acts do |t|
      t.string :title
      t.references :script, null: false, foreign_key: true

      t.timestamps
    end
  end
end
