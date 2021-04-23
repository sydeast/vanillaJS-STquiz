class QuizzesController < ApplicationController
    def index
        quizzes = Quiz.all
        options = {include: [:questions]}
        render json: QuizSerializer.new(quizzes)
    end

    def show
        quiz = Quiz.find(params[:id])
        render json: quiz.to_json(except: [:created_at, :updated_at])
    end

    def create
        quiz = Quiz.new(quiz_params)
        if quiz.save
            render json: QuizSerializer.new(quiz)
        else
            render json: {error: "Could not save/create Quiz"}
        end
    end




    private

    def quiz_params
        params.require(:quiz).permit(:content, :answer)
    end
end
