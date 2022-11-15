const express = require('express')
const { check } = require('express-validator');
const TopicController = require('../controller/TopicsController')

const router = express.Router();

router.get('/', TopicController.add)

router.post('/', [
    check('topic')
        .not()
        .isEmpty()
        .withMessage('Must not be Empty')

], TopicController.create)


router.get('/show', TopicController.show)
router.get('/show/json/topics', TopicController.showJson)
router.get('/edit/:slug', TopicController.edit)
router.post('/update', TopicController.update)
router.get('/delete/:slug', TopicController.delete)

module.exports = router