class CreateHighscores < ActiveRecord::Migration[6.1]
  def change
    create_table :highscores do |t|
      t.string :name
      t.integer :score
      t.references :quiz, null: false, foreign_key: true

      t.timestamps
    end
  end
end
