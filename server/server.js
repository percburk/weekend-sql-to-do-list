const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const toDoRouter = require('./routes/to-do-router');

// body parser, serve static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

// routes
app.use('/todo', toDoRouter);

// start express
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log('listening on port', port);
});
