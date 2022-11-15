const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Topic"
    },
    question: {
        type: String,
        required: true
    },
    answers: [],
    correctIndex: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }

}, { timeStamp: true })

const QuestionModel = mongoose.model('Question', questionSchema)

module.exports = QuestionModel