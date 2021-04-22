class AddQuiztoQuestions < ActiveRecord::Migration[6.1]
  def change
    add_reference :questions, :quiz
  end
end
