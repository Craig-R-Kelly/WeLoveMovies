[https://welovemovies-wjet.onrender.com](https://welovemovies-wjet.onrender.com) - backend

[https://movies-frontend-4epd.onrender.com](https://movies-frontend-4epd.onrender.com) - frontend

<div markdown="fileTab.file.challenge.instructions" multi-language="true" language="fileTab.file.language" class="markdown collapsed"><h1>Project: WeLoveMovies</h1><blockquote>
<p><!--You've been hired on as a backend developer for a new startup called WeLoveMovies! As another developer works on the design and frontend experience, you have been tasked with setting up a database and building out specific routes so that users can gain access to data about movies, theaters, and reviews.-->The scenario for this assignment was one in which the developer had been hired by a new startup called WeLoveMovies.  As another developer worked on the design and frontend experience, the new hire was tasked with setting up a database and building out specific routes so that users can gain access to data about movies, theaters, and reviews.</p>
</blockquote>
<p><zoomable image><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/06596df6b4c59b453c69d84d2bc854b3-home.png" alt="home.png" style="width: 567.918px; height: 368.579px; max-width: none;"></div></zoomable-image></p>
<p><!--This project is designed to test your ability to both build complex servers and access data through a database. To succeed at this project, you'll need to demonstrate you can do the following:-->This project was designed to test ability to both build complex servers and access data through a database. To that end, performance of the following were necessary:






</p>
<ul>
<li>Install and use common middleware packages.</li>
<li>Receive requests through routes.</li>
<li>Run tests from the command line.</li>
<li>Access relevant information through route and query parameters.</li>
<li>Create an error handler for the case where a route does not exist.</li>
<li>Build an API following RESTful design principles.</li>
<li>Create and customize a <code>knexfile.js</code> file.</li>
<li>Create a connection to your database with Knex.</li>
<li>Write database queries to complete CRUD routes in an Express server.</li>
<li>Return joined and nested data with Knex.</li>
<li>Write database migrations using Knex's migration tools.</li>
<li>Deploy your <em>backend</em> server to a cloud service. It's not necessary to deploy the frontend.</li>
</ul>
<!--<p>You will not need to make any edits to HTML or CSS for this project.</p>
<blockquote>
<p><em><strong>Note:</strong> When downloading the assessment files to your local machine, make sure you're running Node v18 before you run</em> <code>npm install</code>. </p>
<ol>
<li><em>Check which version you are running:</em> <code>node -v</code></li>
<li><em>If needed, change the version to v18:</em> <code>nvm use v18</code></li>
</ol>
<p><em>For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module.</em></p>
</blockquote>
<h1>Project setup</h1><p>Follow the instructions below to get this project up and running on your own machine:</p>
<ul>
<li>Download the Qualified assessment files to your computer.</li>
<li>Run <code>npm install</code> to install the project.</li>
<li>Use Postman to test your application and visit <a href="https://github.com/Thinkful-Ed/starter-movie-front-end" target="_blank" rel="noopener">this repository [https://github.com/Thinkful-Ed/starter-movie-front-end]</a> to connect your backend work to a frontend application.</li>
<li>Run <code>npm test</code> to run the tests.</li>
</ul>
<p><em><strong>Note:</strong> Note that the tests make use of an in-memory SQLite database. When updating a record in an in-memory SQLite database, the server does not automatically respond with an array of updated records like PostgreSQL does. As a result, when updating a record, you will need to query the database again to return updated record.</em></p>
<h1>Instructions</h1><p>You are tasked with both setting up the database and building a number of routes that will be used by the frontend application.  For this project, you will start by making the necessary changes to the data tier and then proceed to make changes to the application tier following an inside-out development workflow. Each table is detailed below, as is each route.</p>-->The first task was making necessary changes to the data tier and then proceeding to make changes to the application tier following an inside-out development workflow. 
<h3>Database tables</h3><ul>
<li>Five tables were constructed according to provided specifications.</li>
<li>Migrations were constructed and executed..</li>
<li>Seed data was included that would run correctly if and only if the tables were set up perfectly.</li>
</ul>
<h3>Routes</h3><ul>
<li>Five routes were created for this project.  Some routes returned data dependent on query parameters.</li>
</ul>
<h3>General tasks</h3><p>The project required <ul><li>ensuring that the app.js and server.js files were properly configured for Express,</li><li>integrating the cors package for frontend-backend communication,</li><li>handling non-existent routes with a 404 error, and </li><li>incorrect HTTP method usage on existing routes with a 405 error.</li><li>Additionally, all routes were to respond with the correct status codes and include a data key in their responses.</li></ul><!--</p>
<ul>
<li>Your <code>app.js</code> file and <code>server.js</code> file are correctly configured, with your <code>app.js</code> file exporting the application created from Express.</li>
<li>You make use of the <code>cors</code> package so that requests from the frontend can correctly reach the backend.</li>
<li>If a request is made to a route that does not exist, the server returns a <code>404</code> error.</li>
<li>If a request is made to a route that exists, but the HTTP method is wrong, a <code>405</code> error is returned.</li>
<li>All of your routes should respond with the appropriate status code and should use a <code>data</code> key in the response.</li>
</ul>
<p><em><strong>Note:</strong> In addition to needing to pass the tests and requirements in the instructions here, please review the Rubric Requirements for the human-graded part of this project in your Thinkful curriculum page. You will need to deploy the application (backend and frontend) on Render.</em> </p>-->
</div>
