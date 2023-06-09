const model = require('../models');

module.exports = {
  getStory: async (req, res) => {
    // console.log('get req.params', req.params);
    try {
      const storyInfo = await model.stories.getStory(req.params.storyId);
      console.log('story info', storyInfo.rows);
      res.send(storyInfo.rows);
    } catch (err) {
      console.log('controller get err', err.message);
      res.send(err);
    }
  },

  getList: async (req, res) => {
    // console.log('get list req', req.body);
    try {
      const storyList = await model.stories.getList();
      console.log('lookin at this spot', storyList.rows);
      res.send(storyList.rows);
    } catch (err) {
      console.log('controller getList err', err.message);
      res.send(err);
    }
  },

  putVote: async (req, res) => {
    console.log('vote req.body', req.body);
    try {
      await model.stories.vote(req.body);
      res.sendStatus(204);
    } catch (err) {
      console.log('controller putVote err', err.message);
      res.send(err);
    }
  },

  postStory: async (req, res) => {
    console.log('post req.body', req.body)
    try {
      await model.stories.postStory(req.body);
      res.sendStatus(204);
    } catch (err) {
      console.log('controller postStory err', err.message);
      res.send(err);
    }
  }
}