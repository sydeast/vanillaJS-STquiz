class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :answer
end
