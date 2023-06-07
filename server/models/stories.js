const db = require('../../db');

module.exports = {
  getStory: (id) => db.query(`
    SELECT
      *
    FROM
      stories
    WHERE
      id = $1
  `, [id]),


  getList: () => db.query(`
    Select
      id, story_name, writer_name, score
    FROM
      stories
    WHERE
      flagged = false
    ORDER BY
      id ASC
  `),


  vote: ({ id, vote }) => db.query(`
    UPDATE
      stories
    SET
      score = score + $2
    WHERE
      id = $1
  `, [id, vote]),

  postStory: ({ story_name, story_body, writer_name }) => db.query(`
    INSERT INTO stories (
      story_name,
      story_body,
      writer_name,
      score,
      flagged
    )
    VALUES (
      $1, $2, $3, 0, false
    )
  `, [story_name, story_body, writer_name]),
}