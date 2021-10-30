# Test assignment

These are the evaluation critera:

* Ability to write code that is clean, readable and easy to maintain.
* Ability to organise your code in a good project structure.
* Knowledge of the framework or library used, and good utilization of best practices.

**Important:** The emphasis for us is not to see a complete solution, but to see your approach. We are not expecting that you will spend on it more than 3 hours.


## Setup the project locally

* In order to have a repository that we can pull to review, create a repository from the current template (click on the "Use this template" button). **Please do not fork current repository.** If you create a private repository you will have to add us as contributors.

* Clone the new repository in your local machine.

* Go to the **music-app**. This folder is an Ember application with an initial setup for you.

* Run `npm install`

* Run `ember serve`

* Visit your app in `http://localhost:4200`


**Hint:** If you don't have experience with Ember.js, feel free to look at the documentation before and during the task: [Ember guides](https://guides.emberjs.com/release/).

**Hint:** Feel free to use the most recent version of Ember.js or any library/tool you need to complete this task. 

## Tasks

### Music app

#### 1. Complete data model

At this point you already have the `music-app` application up and running locally. So, now you will be building an application that can show a collection of music albums.

We have created a boilerplate to get you started, that contains the [models](https://api.emberjs.com/ember-data/release/modules/@ember-data%2Fmodel) for:

* Albums.
* songs.
* Genres.
* Artists.

These are possible relationships, between the models:

* An album has songs.
* A song has many artists and belongs to a genre.
* An artist has many songs.


Now, we want you to complete the Ember data models according to what you think is required to implement filters to allow the users to have a great experience with our music collection.

#### 1. Ensure we have data to show

In the previous step you created a data model to store some information, now we want you to add some albums, songs, genres and artists to our music collection.

* Add 10 albums to our music collection
* Each album has between 3 and 10 songs.
* Each song belongs to one genre.
* A song can have multiple artists associated.

**Hint:** Mirage is a great addon to mock data: https://www.ember-cli-mirage.com/docs/getting-started/what-is-mirage

#### 2. Listing

Create a page where the user can browse and filter the albums and look at their songs.

Please write your own styles and add them to `music-app/styles/app.scss`.

#### 3. Adding records

Add an option for users to add a new song to an album and save it.

#### 4. Editing records

Add an option to edit the information of a song and save it.

#### 5. Tests

Let's run the test and ship the app when ready!. Make sure tests are passing.

Run `ember test --serve` in the `music-app` folder of your repository to execute tests.
