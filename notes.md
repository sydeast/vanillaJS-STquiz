User Stories:
* A user logs in and can take the star trek quiz
* A user logs in and can create and save a quiz to their account
* A user can edit, update or destroy their own quizzes

Models:

User
has_many :quizes
has_secure_password
validates :email, presence: true, uniqueness: true
validates :name, presence: true

name
email
password_digest


Quiz
belongs_to :user
has_many :questions
validates :name, presence: true

name

Question
belongs_to :quiz
has_many :answers
validates :content, presence: true

content

Answer
belongs_to :question
validates :content, presence: true

content




Nice to add:
* save results


