CREATE TABLE "to_do_list" (
  "id" SERIAL PRIMARY KEY, 
  "task" varchar(80) NOT NULL,
  "due_date" date,
  "priority" varchar(4),
  "done" BOOLEAN
);

INSERT INTO "to_do_list" ("task", "due_date", "priority", "done")
VALUES ('Walk dog', '2021-01-12', '!!!', false),
('Target run', '2021-02-12', '!', true),
('Cook dinner', '2021-01-15', 'none', false),
('Do laundry', NULL, '!!', false),
('Get coffee', NULL, 'none', false);


-- try entering today or tomorrow's date on a new task!!