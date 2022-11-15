const TopicModel = require("../Models/Topic")
const { validationResult } = require('express-validator')


exports.add = (req, res) => {
    return res.render('topic/add', { errorList: 0, success: 0 })
}


exports.create = async (req, res, next) => {

    //get the validation part
    const errors = validationResult(req)
    if (errors.errors.length != 0) {
        console.log(errors.errors);
        return res.status(400).render('topic/add', { errorList: errors.mapped() })
    }

    //creating the topic into database

    try {
        await TopicModel.create({
            topic: req.body.topic,
            slug: req.body.topic.split(" ").join("-"),
            status: true
        })

        res.status(200).render('topic/add', { success: 'Success', errorList: 0 })
        // res.redirect('/admin/productlist')
    } catch (error) {
        res.status(200).render('topic/add', { success: 0, errorList: 'Some Error Occured!' })
    }
}


exports.show = async (req, res) => {
    try {
        const allTopics = await TopicModel.find()
        return res.render('topic/show', { topics: allTopics })
        // return res.status(200).json(allTopics)
    } catch (error) {
        console.log(error);
        return res.status(500).json('Some Error Occured!')
    }
}


exports.showJson = async (req, res) => {
    try {
        const allTopics = await TopicModel.find()

        return res.status(200).json(allTopics)
    } catch (error) {
        console.log(error);
        return res.status(500).json('Some Error Occured!')
    }
}


exports.edit = async (req, res) => {
    try {

        const topic = await TopicModel.findOne({ slug: req.params.slug })
        if (topic) {
            return res.status(200).render('topic/edit', { topic: topic })
        } else {
            return res.status(200).render('404')
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json('Some Error Occured!')
    }
}


exports.update = async (req, res) => {
    try {
        const topic = await TopicModel.findOneAndUpdate({ _id: req.body.id }, { topic: req.body.topic, slug: req.body.topic.split(" ").join("-"), status: true })
        return res.status(200).redirect('/api/topics/show')
    } catch (error) {
        console.log(error);
        return res.status(500).json('Some Error Occured!')
    }
}


exports.delete = async (req, res) => {

    try {
        const topic = await TopicModel.findOneAndDelete({ slug: req.params.slug })
        return res.status(200).redirect('/api/topics/show')
    } catch (error) {
        console.log(error);
        return res.status(500).json('Some Error Occured!')
    }
}

