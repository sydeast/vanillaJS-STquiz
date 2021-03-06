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
    {
        content: "Was Cmd. Montgomery Scott the second officer of U.S.S. Enterprise?",
        answer: 1,
        quiz: "Star Trek"
    },
    {
        content: "Zefram Coacher was the inventor of the warp drive.",
        answer: 0,
        quiz: "Star Trek"
    },
    {
        content: "Spock, as a child, had a pet named Shelat",
        answer: 1,
        quiz: "Star Trek"
    },
    {
        content: "Sulu was chief of security aboard the I.S.S. Enterprise.",
        answer: 0,
        quiz: "Star Trek"
    }

]

questions.each { |q|
    new_question = Question.create(
        content: q[:content],
        answer: q[:answer]
    )
        quizSet = Quiz.find_by(title: q[:quiz])
        quizSet.questions << new_question
}


highscores_seed = [
    {
        name: "Samus",
        score: 80,
        quiz_id: 1
    },
    {
        name: "Rikku",
        score: 60,
        quiz_id: 1
    },
    {
        name: "T.N.B.",
        score: 110,
        quiz_id: 1
    },
    {
        name: "J.M.P.",
        score: 0,
        quiz_id: 1
    },
    {
        name: "A.o.A",
        score: 60,
        quiz_id: 1
    },
    {
        name: "T.N.B.",
        score: 100,
        quiz_id: 1
    }
]

highscores_seed.each { |h| newHighscores = Highscore.create( name: h[:name], score: h[:score], quiz_id: h[:quiz_id] )}
