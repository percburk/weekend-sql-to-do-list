[x] create files
  [x] public - index.html, styles/style.css, scripts/client.js, vendors/jquery
  [x] server - server.js, routes/route.js, modules/pool.js, 
  [x] .gitignore!
  [x] database.sql
  
[x] set up sql in postico
  [x] create table called 'weekend-to-do-app'
  [x] set database schema
  [x] enter sample information
  [x] copy database info to project file

[x] set up server
  [x] install node, express, and pg
  [x] create pool module, export!
  [x] create route file for 'weekend-to-do-app', export!

[x] html
  [x] input bar for new tasks with different categories
  [x] submit button to add new task
  [x] container for list of tasks

[x] get route
  [x] server - router to get info from sql, send to client
  [x] client - append info using jquery onto dom

[x] post route
  [x] data validation
  [x] client - click listener to send info to server, call get function
  [x] server - send new info to sql, remember to stop sql injection!

[x] put route
  [x] client - click listener to change status to 'completed', call get function
  [x] server - send update query to sql to show completed

[x] put route 2 - to change priority level
  [x] client - click listener to change status, upping one bang per click
  [x] server - send update query to sql to show new priority level

[x] delete route
  [x] client - click listener to get deleted task, call get function
  [x] server - send delete query to sql to delete task

[x] styling/dom
  [x] import and use icon set to display priority, complete, and delete
  [x] let's not use a table, instead appending divs for each task
  [ ] source favicon!
  [x] set up grid for dev elements
  [x] format time and date nicely, some logic to show strings for common days "today", "tomorrow", etc.
  [x] adjust jQuery hovers to show 'finger' over div elements which are click listeners

