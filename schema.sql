DROP TABLE IF EXISTS stories;

CREATE TABLE stories (
  id SERIAL PRIMARY KEY,
  story_name TEXT,
  story_body TEXT,
  writer_name TEXT,
  score INT,
  flagged BOOLEAN
);
