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
        if question.save
            render json: QuestionSerializer.new(question)
        else
            render json: {error: "Could not save/create"}
        end
    end




    private

    def question_params
        params.require(:question).permit(:content, :answer, )
    end
end
