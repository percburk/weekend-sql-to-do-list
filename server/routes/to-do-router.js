const express = require('express');
const router = express.Router();

// database connection
const pool = require('../modules/pool');

// get route
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "to_do_list" ORDER BY "id"`;

  pool
    .query(queryText)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in get', error);
      res.sendStatus(500);
    });
});

// post route
router.post('/', (req, res) => {
  let newTask = req.body;
  console.log(newTask);

  if (newTask.due_date === '') {
    newTask.due_date = null;
  }

  const queryText = `
    INSERT INTO "to_do_list" ("task", "due_date", "priority", "done")
    VALUES ($1, $2, $3, $4);`;

  pool
    .query(queryText, [
      newTask.task,
      newTask.due_date,
      newTask.priority,
      newTask.done,
    ])
    .then((result) => {
      console.log(result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// put route

// delete route

module.exports = router;
