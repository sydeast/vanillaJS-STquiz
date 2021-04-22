# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
questions = [
    {
        content: "Is Captain James Kirk also named after the Roman emperor Tiberus?",
        answer: 1
    },
    {
        content: "Does the planet Elba III hold a facility for criminal inmates deemed incurably insane?",
        answer: 0
    },
    {
        content: "Is General Order 1 also known as the Prime Directive in Starfleet?",
        answer: 1
    },
    {
        content: "Vulcan blood is blue in color.",
        answer: 0
    },
    {
        content: "Most meals are prepared by a nutrition staff onboard the U.S.S. Enterprise.",
        answer: 0
    },
    {
        content: "In Starfleet, planets are classified by letters to denote habitability. Is Earth known as a Class-M planet?",
        answer: 1
    },
]

questions.each { |q| new_question = Question.create( content: q[:content], answer: q[:answer])}