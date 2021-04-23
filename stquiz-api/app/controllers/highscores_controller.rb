class HighscoresController < ApplicationController
    def index
        @highscores = Highscore.all
        render json: HighscoreSerializer.new(@highscores)
    end

    def show
        highscore = Highscore.find(params[:id])
        render json: highscore.to_json(except: [:created_at, :updated_at])
    end

    def create
        highscore = Highscore.new(highscore_params)
        quiz = Quiz.find_by(params["quiz.id"])
        highscore.quiz_id = quiz.id
        if highscore.save
            render json: HighscoreSerializer.new(highscore)
        else
            render json: {error: "Could not save/create highscores"}
        end
    end




    private

    def highscore_params
        params.require(:highscore).permit(:name, :score)
    end

end
