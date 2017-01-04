<!--10:50 10 minutes for setup -->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Modeling Tunr

> _This is a pair programming activity.  This means only one developer should be "driving" at a time, and we only need to use one computer per pair._

You and the people at Tunr want to add some functionality to your talent management application. You and your partner get the benefit of starting with the existing application that can already CRUD artists. Now Tunr has hired you guys to also keep track of their managers and songs!

<!--Show the fully functioning artist part first -->

## Starting Off

* Use the code in `starter-code` to get started!
* `npm install` and `--save` the following packages
	* `express` `sequelize` `pg` `pg-hstore` `body-parser`
* Go into the `public` folder, and `bower install` and `--save` the following packages
	* `angular` `angular-route`
* Look inside `models/index.js` and create the database at the end of the connect URL (in the `psql` console)
* Replace the `<username>` field with your local Mac username
* Look at `db/dbSetup.js`. Get a basic idea for what it is doing, then run it with `node`.
* Run nodemon on `server.js`
* Check out the functionality for viewing, adding, and updating artists.
* For reference, check the [Sequelize Docs](http://docs.sequelizejs.com/en/latest/) throughout this lab
* Lean heavily on your `starter-code`, but go slowly--one function, one route at a time
* Make sure you test early and often, preferably multiple times per step (bullet point)
* If you get stuck, get unstuck! Advice for getting unstuck includes:
	* Not freezing up but continually trying new things (googling, reading docs, experimenting, etc)
	* Identifying once you are stuck, as you have already tried all options you can think of
	* Homing in on your gap in knowledge by phrasing a specific question
	* Close your knowledge gap by ASKING that question to someone!

## Requirements

- Sprint 1: User can CRUD managers
  - As of now, the only route that works for managers is `index`.  Go to `/managers` in your browser to check it out!  Now, build out the rest of the CRUD functionality, using the CRUDable `artists` as an inspiration.
	  - Fill out your front-end routes in `js/client.js`, using the artists routes as a model.  For now, it is okay to show plain HTML with no template files or controllers.  Something like this: 
	```js
	//new
	.when('/managers/new', {
		template: '<h1>New Manager Yay!</h1>'
	})	
	```
	  - Create simple front-end templates for `show.html`, `edit.html`, and `new.html` in `public/templates/managers`, using the artists templates and the managers `index.html` as models.  Do NOT copy-and-paste, you need to change all the fields in this template to match your manager attributes, namely `name`, `email`, `office_number`, and `cell_phone_number`.  A good way to do this, is to have an artist template on the left side of your screen, and the corresponding manager template on the right side.
	  - Fill out your front-end controllers for `public/js/controllers/manager.js`, using `public/js/controllers/artist.js` as a model.
	  - Create managers back-end routes in your `routes.js` file, following the same format as artists.  For now, these can just send "Hello World" responses.
	  - Create `managers.js` in your back-end `controllers` folder and give it all the functions you already have for artists.  Link this up to your `routes.js` file.
	  - Finish the `Manager` model for your database. Give them the attributes `name`, `email`, `office_number`, and `cell_phone_number` all type `String`.
	  - Test out all your routes to make sure `manager` has the same functionality as `artist`.

>**Hint:** If you see an error saying that the relation "managers" does not exist, you should probably run `dbSetup.js` again.

- Sprint 2: User can CRUD songs
  - Same as above, create `songs` routes and templates for the front end.
  - Same as above, create `songs` templates for the front end.  
  - Same as above, create `songs` controllers for the front end.  
  - Same as above, create `songs` routes for the back end.
  - Same as above, create `songs` controllers for the back end.
  - Same as above, give the `Song` model attributes `title`, `duration`, `date_of_release`, and `album_title`.

- Sprint 3: User can see some data populated in the application

  - Seed your application with some data. 
  	- Check out the almost-complete Artist creation, and fill in the correct info.
	- Follow this pattern for Manager and Song creation.
	- It would be a good idea to chain your `create`s with `.then`s.  
	- Don't forget to `.exit()` when you're done with your last `create`.
  
Put the following into your DB with `db/seed.js`:

  **Artist**:  

    - Name: Luciano Pavarotti
    - Photo URL: http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg
    - Nationality: Italiano
    - Instrument: Voice
    - Home Address: 1 Strada Roma

  **Manager**:  

    - Name: Ricky Bobby
    - Email: rbobby@gmail.com
    - Office Number: 516-877-0304  
    - Cell Phone Number: 718-989-1231

  **Song**:  
  
    - Title: The Best Song Ever
    - Duration: 3:31
    - Date of Release: 7/13/2015
    - Album Title: Best Album Ever

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
