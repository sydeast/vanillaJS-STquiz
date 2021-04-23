class HighscoreSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :score, :quiz_id
end
