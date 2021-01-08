[ ] create files
  [ ] public - index.html, styles/style.css, scripts/client.js, vendors/jquery, images/icons
  [ ] server - server.js, routes/route.js, modules/pool.js, 
  [ ] .gitignore!
  [ ] database.sql
  
[ ] set up sql in postico
  [ ] create table called 'weekend-to-do-app'
  [ ] set database schema
  [ ] enter sample information
  [ ] copy database info to project file

[ ] set up server
  [ ] install express and pg
  [ ] create pool module, export!
  [ ] create route file for 'weekend-to-do-app', export!

[ ] html
  [ ] input bar for new tasks with different categories
  [ ] submit button to add new task
  [ ] container for list of tasks

[ ] get route
  [ ] server - router to get info from sql, send to client
  [ ] client - append info using jquery onto dom

[ ] post route
  [ ] data validation
  [ ] client - click listener to send info to server, call get function
  [ ] server - send new info to sql, remember to stop sql injection!

[ ] put route
  [ ] client - click listener to change status to 'completed', call get function
  [ ] server - send update query to sql to show completed

[ ] delete route
  [ ] client - click listener to get deleted task, call get function
  [ ] server - send delete query to sql to delete task

[ ] css
  [ ] import and use icon set to display priority, complete, and delete
  [ ] let's not use a table, instead appending divs for each task
  [ ] source favicon!
