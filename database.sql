CREATE TABLE "to_do_list" (
  "id" SERIAL PRIMARY KEY, 
  "task" varchar(80) NOT NULL,
  "due_date" date,
  "priority" varchar(3),
  "done" BOOLEAN
);

INSERT INTO "to_do_list" ("task", "due_date", "priority", "done")
VALUES ('Walk dog', '1-8-21', '!!!', false),
('Target run', '1-9-21', '!', true),
('Cook dinner', '1-10-21', '', false),
('Do laundry', NULL, '!!', false),
('Get coffee', NULL, '!!', false);