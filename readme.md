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
* Tab and Sublime Text shortcuts are your friend, Copy-and-Paste is not.
* If you get stuck, get unstuck! Advice for getting unstuck includes:
	* Not freezing up but continually trying new things (googling, reading docs, experimenting, etc)
	* Identifying once you are stuck, as you have already tried all options you can think of
	* Homing in on your gap in knowledge by phrasing a specific question
	* Close your knowledge gap by ASKING that question to someone!

## Requirements

<!--Instructor should model the entire `show` route all the way through to the back end. Devs will be at half-mast for this.  Then turn over to devs to code themselves.-->

<!--20-25 minutes for this -->

- Sprint 1: User can CRUD managers
  - As of now, the only route that works for managers is `index`.  Go to `/managers` in your browser to check it out!  Not very impressive I suppose, but it will be once we build out the rest of the CRUD functionality, using the CRUDable `artists` as an inspiration.
	  - Fill out your front-end routes in `js/client.js`, using the artists routes as a model.  For now, it is okay to show plain HTML with no template files or controllers.  Something like this: 
	```js
	//new
	.when('/managers/new', {
		template: '<h1>New Manager Yay!</h1>'
	})	
	```
	  - Create simple front-end templates for `show.html`, `edit.html`, and `new.html` in `public/templates/managers`, using the artists templates and the managers `index.html` as models.  Do NOT copy-and-paste, you need to change all the fields in these templates to match your manager attributes, namely `name`, `email`, `office_number`, and `cell_phone_number`.  A good way to do this is to have an artist template on the left side of your screen, and the corresponding manager template on the right side.
	  <blockquote>**Note:** Once you are done creating a template, change the hard-coded `template` in your front-end route to a `templateUrl` pointing to the file.  Test each file to make sure it looks OK before you move on to the next one. No managers showing up?  Exactly, we haven't made any data yet.  Let's do that now...</blockquote>
	  - Fill out your front-end controllers for `public/js/controllers/manager.js`, one at a time, using `public/js/controllers/artist.js` as a model. Follow the same left-side-right-side technique as you did for templates. We do not need `$http` yet, though.  For now, you can just create a hard-coded array of two managers like `Ricky Bobby` below and a similar one like `Bicky Robby`. That will look something like this:
	  ```js

	  var managers = [
		{
			name: "Ricky Bobby",
			email: "rbobby@gmail.com",
			office_number: "516-877-0304",
			cell_phone_number: "718-989-1231",
			id: 0
		},
		...
	  ```	
	<blockquote>**Note:** Make sure to add these manager controllers into your front-end routes if you haven't already, using the artists routes as a model.</blockquote>
	<blockquote>**Note:** For `edit` and `new`, it is okay that your managers do not persist.  As long as you can see them in the Dev Tools console, you're ready to move on.</blockquote>
	  - Create managers back-end routes in your `routes.js` file, following the same format as artists.  
	  - Create `managers.js` in your back-end `controllers` folder and give it all the functions you already have in `artists.js`.  For now, these should just use the hard-coded array of managers you created earlier (copy it over from the front-end controller).
	  <blockquote>**Note:** Before you move on to the next step, we need to test that our back end is working.  What mail-themed program might we use to test these API routes?</blockquote>
	  - Now wire up `$http` on your front-end managers controller, following the left-side-right-side technique with the `artist.js` front-end controller.  Test this out on your browser.  Now we have everything we need except for data persistence.  Let's put a bow on our managers--*Sequelize style*.
	  - Finish the `Manager` model for your database. Give them the attributes `name`, `email`, `office_number`, and `cell_phone_number`, all of type `String`.
	  - Now go back to your back-end `managers.js` controller and use the `artists.js` controller as a model for all of your DB methods.
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
