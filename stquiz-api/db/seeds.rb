# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

quizST = Quiz.create(title: "Star Trek")

questions = [
    {
        content: "Is Captain James Kirk also named after the Roman emperor Tiberus?",
        answer: 1,
        quiz: "Star Trek"
    },
    {
        content: "Does the planet Elba III hold a facility for criminal inmates deemed incurably insane?",
        answer: 0,
        quiz: "Star Trek"
    },
    {
        content: "Is General Order 1 also known as the Prime Directive in Starfleet?",
        answer: 1,
        quiz: "Star Trek"
    },
    {
        content: "Vulcan blood is blue in color.",
        answer: 0,
        quiz: "Star Trek"
    },
    {
        content: "Most meals are prepared by a nutrition staff onboard the U.S.S. Enterprise.",
        answer: 0,
        quiz: "Star Trek"
    },
    {
        content: "In Starfleet, planets are classified by letters to denote habitability. Is Earth known as a Class-M planet?",
        answer: 1,
        quiz: "Star Trek"
    },
]

questions.each { |q|
    new_question = Question.create(
        content: q[:content],
        answer: q[:answer]
    )
        quizSet = Quiz.find_by(title: q[:quiz])
        quizSet.questions << new_question
}