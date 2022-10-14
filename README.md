# SOCIAL ENGINEER
Social Engineer is a web-based platform that brings Engineers and Clients closer together. 

## Who Would Benefit From Using Social Engineer?
- Registered Engineers looking to showcase their projects and get contacted by potential clients.
- Anyone looking to start a project and would like to contract the services of a skilled Engineer.
- Engineering Students on the lookout for Internship opportunities at various ongoing projects or with particular firms.

## Getting Started
### Pre-requisites
To use the project, the following should already be be locally installed: 
- Ruby 2.7.4 
- Bundle
- NodeJS (v16)
- npm
- Postgresql (Installation instructions available in the deployment section)

### Setting up 
- Fork and Clone this repository to create a local copy.
- navigate to the project directory. `cd file/to/folder/Social-Engineer`
- Run `bundle install` to install all the gems required as listed in the Gemfile.
- Run `npm insstall --prefix client` to install the front-end dependencies.
- Run `rails db:create` to create the database.
- Run `rails db:migrate` to set up your database tables.
- Run `rails db:seed` to populate your database with sample data. Feel free to edit/create new values of your own.   
- To start the backend server, use the command `rails server` which will run it on [http://localhost:3000](http://localhost:3000)
- To run the frontend, run the command `npm start --prefix client` which will run it on [http://localhost:4000](http://localhost:4000)
- Code Away!
  
 ## The API Reference (Backend)
 ### Getting started
 When running locally, the server runs on port 3000, hence the base URL for the api is:
 
 `http://127.0.0.1:3000/`
 No Authorization or API Key required.
 
 ### Data Format
 All the data is returned in JSON format.
 
 ### Endpoints
 
 *Note:* All endpoints return a status_code and an accompanying success message.
 
 
 1) GET /projects
 Example: `curl http://127.0.0.1:3000/projects`
 
 Requires Authentication?: NO
 
 Returns: An array of all the 'project' objects
 
 Expected response:
 ```
[
    
]
 ```
 2) GET /projects/:id
 Example: `curl http://127.0.0.1:3000/projects/1`
 
 Requires Authentication?: NO
 
 Returns: An single 'project' object
 
 Expected response:
 ```
{

}
 ```

 3) POST /projects
 Example: `curl -X PATCH -d '{"title": "Mjengo Apartments", "description":"Beautiful and urban homes in the heart of Kileleshwa", "image":"image.jpg","status":"ongoing", "location":"Nairobi"}' http://127.0.0.1:3000/projects`
 
 Requires Authentication?: YES
 
 Returns: The created 'project' object
 
 Expected response:
 ```
{

}
 ```
 4) PATCH /projects/:id
 Example: `curl -X PATCH -d '{"description": "An updated description of the project"}' http://127.0.0.1:3000/projects/1`
 
 Requires Authentication?: YES
 
 Returns: The updated 'project' object
 
 Expected response:
 ```
{
   
}
 ```

 5) DELETE /projects/:id
  Example: `curl -X DELETE http://127.0.0.1:3000/powers/1`

  Requires Authentication?: YES
 
  Returns: Status 204: no_content

 ### Errors
 All endpoints return JSON objects representing the errors and an accompanying status message.

 Example:
 ```
 {

 }
 ```

 ## The Frontend - React JS
 (To Update ...)
 
 ## Deployment

  ### Environment Setup

  #### Install the Latest Ruby Version

  Verify which version of Ruby you're running by entering this in the terminal:

  ```sh
  ruby -v
  ```

  Make sure that the Ruby version you're running is listed in the [supported
  runtimes][] by Heroku. At the time of writing, supported versions are 2.6.8,
  2.7.4, or 3.0.2. 

  If it's not, you can use `rvm` to install a newer version of Ruby:

  ```sh
  rvm install 2.7.4 --default
  ```

  You should also install the latest versions of `bundler` and `rails`:

  ```sh
  gem install bundler
  gem install rails
  ```

  [supported runtimes]: https://devcenter.heroku.com/articles/ruby-support#supported-runtimes

  #### Install NodeJS

  Verify you are running a recent version of Node with:

  ```sh
  node -v
  ```

  If your Node version is not 16.x.x, install it and set it as the current and
  default version with:

  ```sh
  nvm install 16
  nvm use 16
  nvm alias default 16
  ```

  You can also update your npm version with:

  ```sh
  npm i -g npm
  ```

  #### Sign Up for a [Heroku Account][heroku signup]

  You can sign up at for a free account at
  [https://signup.heroku.com/devcenter][heroku signup].

  #### Download the [Heroku CLI][heroku cli] Application

  Download the Heroku CLI. For OSX users, you can use Homebrew:

  ```sh
  brew tap heroku/brew && brew install heroku
  ```

  For WSL users, run this command in the Ubuntu terminal:

  ```sh
  curl https://cli-assets.heroku.com/install.sh | sh
  ```

  If you run into issues installing, check out the [Heroku CLI][heroku cli]
  downloads page for more options.

  After downloading, you can login via the CLI in the terminal:

  ```sh
  heroku login
  ```

  This will open a browser window to log you into your Heroku account. After
  logging in, close the browser window and return to the terminal. You can run
  `heroku whoami` in the terminal to verify that you have logged in successfully.

  [heroku signup]: https://signup.heroku.com/devcenter
  [heroku cli]: https://devcenter.heroku.com/articles/heroku-cli#download-and-install

  #### PostgreSQL Installation for WSL

  To install Postgres for WSL, run the following commands from your Ubuntu terminal:

  ```sh
  sudo apt update
  sudo apt install postgresql postgresql-contrib libpq-dev
  ```

  Then confirm that Postgres was installed successfully:

  ```sh
  psql --version
  ```

  Run this command to start the Postgres service:

  ```sh
  sudo service postgresql start
  ```

  Finally, you'll also need to create a database user so that you are able to
  connect to the database from Rails. First, check what your operating system
  username is:

  ```sh
  whoami
  ```

  If your username is "ian", for example, you'd need to create a Postgres user
  with that same name. To do so, run this command to open the Postgres CLI:

  ```sh
  sudo -u postgres -i
  ```

  From the Postgres CLI, run this command (replacing "ian" with your username):

  ```sh
  createuser -sr ian
  ```

  Then enter `control + d` or type `logout` to exit.

  [This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
  get stuck.

  [postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

  #### Postgresql Installation for OSX

  To install Postgres for OSX, you can use Homebrew:

  ```sh
  brew install postgresql
  ```

  Once Postgres has been installed, run this command to start the Postgres
  service:

  ```sh
  brew services start postgresql
  ```

  #### Deployment

  Once you've already set up your environment to deploy to Heroku, you can run the
  commands below to deploy your application. 

  Create the new Heroku app:

  ```sh
  heroku create my-app-name
  ```

  Add the buildpacks for Heroku to build the React app on Node and run the Rails
  app on Ruby:

  ```sh
  heroku buildpacks:add heroku/nodejs --index 1
  heroku buildpacks:add heroku/ruby --index 2
  ```

  To deploy, commit your code and push the changes to Heroku:

  ```sh
  git add .
  git commit -m 'Commit message'
  git push heroku main
  ```

  > Note: depending on your Git configuration, your default branch might be named
  > `master` or `main`. You can verify which by running
  > `git branch --show-current`. If it's `master`, you'll need to run
  > `git push heroku master` instead.

  Any time you have changes to deploy, just make sure your changes are committed
  on the main branch of your repo, and push those changes to Heroku to deploy
  them.

  You can view your deployed app with:

  ```sh
  heroku open
  ```
 
 ## Authors
  - [Joy Whitney](https://github.com/Whitneyjoymuchira)
  - [Abrirahman Abdi]()
  - [Bonface Masira](https://github.com/bonfacemasira) 
  - [Richard Gichuki](https://github.com/ChadGichuki)
 
  
 ## Acknowledgements
  Our Moringa School TM: [Anita Kahenya](https://github.com/kahenya-anita)

