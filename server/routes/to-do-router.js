const express = require('express');
const router = express.Router();

// database connection
const pool = require('../modules/pool');

// moment connection
const moment = require('../modules/moment')

// get route
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "to_do_list" ORDER BY "done" DESC, "due_date"`;

  pool
    .query(queryText)
    .then((result) => {
      let taskArray = dateFormatter(result.rows);
      res.send(taskArray);
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
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// put route to change done status
router.put('/:id', (req, res) => {
  let id = req.params.id;
  let newStatus = req.body.done;

  const queryText = `
    UPDATE "to_do_list" SET "done" = $1 WHERE "id" = $2;`;

  pool
    .query(queryText, [newStatus, id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// put route to change priority
router.put('/priority/:id', (req, res) => {
  let id = req.params.id;
  let newPriority = req.body.priority;
  
  const queryText = `
    UPDATE "to_do_list" SET "priority" = $1 WHERE "id" = $2;`;

  pool
    .query(queryText, [newPriority, id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      console.log(error);
      res.sendStatus(500);
    });
});

// delete route
router.delete('/:id', (req, res) => {
  let id = req.params.id;
  const queryText = `DELETE FROM "to_do_list" WHERE "id" = $1;`;

  pool
    .query(queryText, [id])
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

const dateFormatter = (array) => {
  let now = moment().format("MMM Do")
  let dateFormattedArray = array.forEach((item) => {
    switch (item.due_date) {
      


    }

  })
  return dateFormattedArray;
}

module.exports = router;
