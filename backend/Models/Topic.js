const mongoose = require('mongoose')

const TopicSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        unique: true
    },

    status: {
        type: Boolean,
        default: true
    }
}, { timeStamp: true })

const TopicModel = mongoose.model('Topic', TopicSchema)

module.exports = TopicModel