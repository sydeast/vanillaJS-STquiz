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

    def update
        question = Question.find_by_id(params[:id])
        if question.update(question_params)
             render json: QuestionSerializer.new(question)
        else
            render json: {error: "Could not save question"}
        end
    end

    def destroy
        question = Question.find(params[:id])
        question.destroy
        render json: {message: "Successfully deleted #{question.content}"}
    end



    private

    def question_params
        params.require(:question).permit(:content, :answer )
    end
end
