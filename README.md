# vanillaJS-STquiz


[![license](https://img.shields.io/github/license/sydeast/vanillaJS-STquiz.svg?style=flat-square)](https://github.com/sydeast/vanillaJS-STquiz/blob/main/LICENSE)

COD: (https://github.com/sydeast/vanillaJS-STquiz/blob/main/code_of_conduct.md)

 Flatiron JS Assessment project - Star Trek Quiz

This is a Star Trek themed trivia single page application using a built-in RAILS API. The webapp will navigate users through trivia questions where they can complete for the highest score on the leaderboard. Mostly built to be flushed out to include other quizzes, this app main js file (index.js) is reusable over and over again with only minor changes needed for variable and FETCH URL needs. Questions can be seeded via the API.

## Tools
Built using Ruby on Rails 6.1.3, VanillaJS, and FastJSONapi. The database is still sqlite; however, there are future plans to move this project to Heroku; therefore, the DB will change to postgreSQL soon. Check the Gemfile and Gemlock for more tooling information.

## To Run for development or personal use
Clone the repo to your machine, cd into the backend folder, and run below command in your terminal to install all gems and their dependencies
```
$ bundle install
```

Next run the migration and seed files. If installing for personal use, run the second command as you will not need seeded data. Passwords for the accounts are in the seed file. Note: Rake Setup command will reset any data currently in the database if you have the database setup.

Development:

```
$ rails db:setup
```

Personal:
```
$ rails db:migration
```

Now start your local server to access the data from the api
```
$ rails s
```

Open the following file from the /frontend folder in your preferred web browser and enjoy!
```
index.html
```

HAVE FUN!

## Contibuting
Currently this project is an assignment for my course. Once completed, the project will be open for collaboration. In the meantime, please feel free to open pull requests or contact me via a bug creation. PR approval will occur after assessment and if changes are valid.


## Future Work
* User Logins
* Edit your quizzes and questions beyond creation (when user auth is avaible)
* Image based questions

