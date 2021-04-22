class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :answer, :quiz_id
end
