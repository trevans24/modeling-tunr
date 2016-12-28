<!--10:50 10 minutes for setup -->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Modeling Tunr

> _This is a pair programming activity._

You and the people at Tunr want to add some functionality to your talent management application. You and your parter get the benefit of starting with the existing application that can already CRUD artists. Now Tunr has hired you guys to also keep track of their managers and songs!

## Starting Off

* Use the code in `starter-code` to get started!
* `npm install` and `--save` the following packages
	* `express` `sequelize` `pg` `pg-hstore` `ejs` `body-parser` `method-override`
* Look inside `models/index.js` and create the database at the end of the connect URL (in the `psql` console)
* Replace the `<username>` field with your local Mac username
* Look at `db/dbSetup.js`. Get a basic idea for what it is doing, then run it with `node`.
* Run nodemon on `server.js`
* [Sequelize Docs](http://docs.sequelizejs.com/en/latest/)
* Lean heavily on your `starter-code`, but go slowly--one function, one route at a time
* Make sure you test early and often, preferably multiple times per step (bullet point)
* If you get stuck, get unstuck! Advice for getting unstuck includes:
	* Not freezing up but continually trying new things (googling, reading docs, experimenting, etc)
	* Identifying once you are stuck, as you have already tried all options you can think of
	* Homing in on your gap in knowledge by phrasing a specific question
	* Close your knowledge gap by ASKING that question to someone!

## Requirements

- Sprint 1: User can CRUD managers
  - Create managers routes in your `routes.js` file, following the same format as artists.  For now, these can just send "Hello World" responses.
  - Create `managers.js` in your `controllers` folder and give it all the functions you already have for artists.  Link this up to your `routes.js` file.
  - Create a `Manager` model and table in your database. Give them the attributes `name`, `email`, `office_number`, and `cell_phone_number` all type `String`.

>**Hint:** If you see an error saying that the relation "managers" does not exist, you should probably run `dbSetup.js` again.

- Sprint 2: User can CRUD songs

  - Same as above, create songs routes.
  - Same as above, create songs controllers.
  - Same as above, give the song attributes `title`, `duration`, `date_of_release`, and `album_title`.

- Sprint 3: User can see some data populated in the application

  - Seed your application with some data. You may want to check the [last lesson](https://github.com/den-wdi-2/sequelize_intro) for an idea of how to create new items in the database. Put the following in a `db/seed.js` file:

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
