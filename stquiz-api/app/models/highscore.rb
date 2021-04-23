class Highscore < ApplicationRecord
  belongs_to :quiz

 
    # def highest_score
    #   self.order(score: :desc).limit(20)
    # end



end
