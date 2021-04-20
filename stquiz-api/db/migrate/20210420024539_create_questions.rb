class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :content
      t.boolean :answer, null: false
      t.timestamps
    end
  end
end
