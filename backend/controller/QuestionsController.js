const { mongoose } = require('mongoose')
const QuestionModel = require('../Models/Question')
const TopicModel = require('../Models/Topic')


exports.index = async (req, res, next) => {
    const topics = await TopicModel.find({ status: true })

    return res.render('questions/add', { success: 0, errorList: 0, topics: topics })
}

exports.add = async (req, res, next) => {
    const topics = await TopicModel.find({ status: true })
    try {
        const question = await QuestionModel.create({
            topic: req.body.topic,
            question: req.body.question,
            answers: req.body.answers,
            correctIndex: req.body.correctIndex,
        })
        return res.status(200).render('questions/add', { success: "success", errorList: 0, topics: topics })
    } catch (error) {
        console.log(error);
        return res.status(500).render('questions/add', { success: 0, errorList: 0, topics: topics })
    }
}


exports.show = async (req, res) => {
    try {
        const topics = await TopicModel.find({ status: true })
        return res.status(200).render('questions/show', { topics: topics })
    } catch (error) {
        console.log(error);
        res.status(500).json('Something wrong')
    }
}

exports.showQuestions = async (req, res) => {
    try {
        const allQuestions = await QuestionModel.find({ topic: req.params.id }).populate('topic', 'topic').exec()
        return res.status(200).render('questions/questions', { allQuestions: allQuestions })
    } catch (error) {
        console.log(error);
        res.status(500).json('Something wrong')
    }
}


exports.showQuestionsJson = async (req, res) => {
    try {
        const allQuestions = await QuestionModel.find({ topic: req.params.id }).exec()
        return res.status(200).json(allQuestions)
    } catch (error) {
        console.log(error);
        res.status(500).json('Something wrong')
    }
}

exports.edit = async (req, res) => {
    try {
        const question = await QuestionModel.findById(req.params.id).populate('topic', 'topic')
        const topics = await TopicModel.find({ status: true })
        console.log(question);
        return res.status(200).render('questions/edit', { question: question, topics: topics })
    } catch (error) {
        console.log(error);
        res.status(500).json('Something wrong')
    }
}

exports.update = async (req, res) => {
    try {
        const question = await QuestionModel.findOneAndUpdate({ _id: req.body.id }, {
            topic: req.body.topic,
            question: req.body.question, answers: req.body.answers,
            correctIndex: req.body.correctIndex,
        })
        var url = `/api/question/allQuestions/${req.body.topic}`

        return res.status(200).redirect(url)
    } catch (error) {
        console.log(error);
        res.status(500).json('Something wrong')
    }
}
exports.delete = async (req, res) => {
    try {
        const question = await QuestionModel.findByIdAndDelete({ _id: req.params.id })
        var url = `/api/question/allQuestions/${req.body.topic}`

        return res.status(200).redirect(url)
    } catch (error) {
        console.log(error);
        res.status(500).json('Something wrong')
    }
}