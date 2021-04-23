class QuestionsController < ApplicationController

    def index
        @questions = Question.all
        render json: QuestionSerializer.new(@questions)
    end

    def show
        question = Question.find(params[:id])
        render json: question.to_json(except: [:created_at, :updated_at])
    end

    def create
        question = Question.new(question_params)
        quiz = Quiz.find_by(params["quiz.id"])
        question.quiz_id = quiz.id
        if question.save
            render json: QuestionSerializer.new(question)
        else
            render json: {error: "Could not save/create question"}
        end
    end




    private

    def question_params
        params.require(:question).permit(:content, :answer, )
    end
end
