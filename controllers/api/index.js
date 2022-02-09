const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/comment', commentRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);

module.exports = router;
