const router = require('express').Router();
const controller = require('./controllers');

router.get('/sin/story/:storyId', controller.stories.getStory);
router.get('/sin/list', controller.stories.getList);
router.put('/sin/vote', controller.stories.putVote);

module.exports = router;