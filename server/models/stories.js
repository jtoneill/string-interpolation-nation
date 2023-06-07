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
  `),


  vote: (id, vote) => db.query(`
    UPDATE
      stories
    SET
      score = score + $2
    WHERE
      id = $1
  `, [id, vote]),
}