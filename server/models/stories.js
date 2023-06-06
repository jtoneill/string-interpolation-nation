const db = require('../../db');

module.exports = {
  getStory: (id) => {
    return db.query(`
      SELECT
        *
      FROM
        stories
      WHERE
        id = $1
    `, [id]);
  },

  getList: () => {
    return db.query(`
      Select
        id, story_name, writer_name, score
      FROM
        stories
      WHERE
        flagged = false
    `)
  }
}