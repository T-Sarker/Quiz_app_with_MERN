const express = require('express')
var cors = require('cors')

var bodyParser = require('body-parser');
const db = require('./database/DB')

require('dotenv').config()

// routes import
const HomeRoutes = require('./routes/home')
const TopicRoutes = require('./routes/topics')
const QuestionRoutes = require('./routes/questions')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
//middleware
app.use(express.json())
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))


const PORT = process.env.PORT || 3001;

//connection to database server
db();
//connection to server
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

// route declaration
app.use('/', HomeRoutes)
app.use('/api/topics', TopicRoutes)
app.use('/api/question', QuestionRoutes)
