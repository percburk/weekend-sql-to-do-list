const express = require('express');
const router = express.Router();

// database connection
const pool = require('../modules/pool');
// moment connection
const moment = require('moment');


// get route
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "to_do_list" ORDER BY "done", "due_date", "id"`;

  pool
    .query(queryText)
    .then((result) => {
      dateFormatter(result.rows);
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

  let date = newTask.due_date === '' ? null : moment(newTask.due_date);

  const queryText = `
    INSERT INTO "to_do_list" ("task", "due_date", "priority", "done")
    VALUES ($1, $2, $3, $4);`;

  pool
    .query(queryText, [
      newTask.task,
      date,
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

const dateFormatter = (rows) => {
  let today = moment().format('MMM D');
  let tomorrow = moment().add(1, 'days').format('MMM D');
  
  return rows.forEach((item) => {
    let dueDate = moment(item.due_date).format('MMM D');
    switch (dueDate) {
      case 'Invalid date':
        item.due_date = '';
        break;
      case tomorrow:
        item.due_date = 'Tomorrow';
        break;
      case today:
        item.due_date = 'Today';
        break;
      default:
        item.due_date = dueDate;
    }
  });
}

module.exports = router;
