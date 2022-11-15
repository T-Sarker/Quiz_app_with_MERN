const express = require('express')
const QuestionsController = require('../controller/QuestionsController')
const router = express.Router()

router.get('/add', QuestionsController.index)
router.post('/add', QuestionsController.add)
router.get('/show', QuestionsController.show)
router.get('/allQuestions/:id', QuestionsController.showQuestions)
router.get('/allQuestions/json/:id', QuestionsController.showQuestionsJson)
router.get('/edit/:id', QuestionsController.edit)
router.post('/update', QuestionsController.update)
router.get('/delete/:id', QuestionsController.delete)


module.exports = router