class QuizSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title
  has_many :questions
  has_many :highscores
end
