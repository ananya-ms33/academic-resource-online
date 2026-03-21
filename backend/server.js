require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { MongoClient, ObjectId } = require('mongodb')
const app = express()

app.use(express.json())
app.use(cors())

var db
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const port = process.env.PORT || 3000

MongoClient.connect(url)
    .then((client) => {
        db = client.db('academicresourcehub2')
        app.listen(port, () => { console.log(`✅ Backend is LIVE on port ${port}`) })
    })
    .catch((err) => {
        console.error("❌ DATABASE CONNECTION ERROR:", err.message);
        process.exit(1); // Force Render to show the error
    })

app.get('/resources', (req, res) => {
    var arr = []
    db.collection('resources').find().forEach(t => {
        arr.push(t)
    })
        .then(() => {
            res.json(arr)
        })
})

app.post('/addresource', (req, res) => {
    db.collection('resources').insertOne({
        title: req.body.title,
        link: req.body.link,
        username: req.body.username
    })
        .then(() => {
            res.send("resource added")
        })
})

app.get('/experiences', (req, res) => {
    var arr = []
    db.collection('experiences').find().forEach(t => {
        arr.push(t)
    })
        .then(() => {
            res.json(arr)
        })
})

app.post('/addexperience', (req, res) => {
    db.collection('experiences').insertOne({
        company: req.body.company,
        content: req.body.content,
        username: req.body.username
    })
        .then(() => {
            res.send("experience added")
        })
})

app.delete('/deleteresource/:id', (req, res) => {
    db.collection('resources').deleteOne({ _id: new ObjectId(req.params.id) })
        .then(() => {
            res.json({ message: "deleted" })
        })
})

app.delete('/deleteexperience/:id', (req, res) => {
    db.collection('experiences').deleteOne({ _id: new ObjectId(req.params.id) })
        .then(() => {
            res.json({ message: "deleted" })
        })
})
//if user found sends true and then the role of the user if not sends false sso that itll display the error msg
app.post('/login', (req, res) => {
    db.collection('users').findOne({ username: req.body.username, password: req.body.password })
        .then((user) => {
            if (user) {
                res.json({ success: true, role: user.role })
            } else {
                res.json({ success: false })
            }
        })
})

app.post('/register', (req, res) => {
    db.collection('users').findOne({ username: req.body.username })
        .then(user => {
            if (user) {
                res.json({ success: false, message: "Username already exists!" })
            } else {
                db.collection('users').insertOne({ username: req.body.username, password: req.body.password, role: "student" })
                    .then(() => {
                        res.json({ success: true })
                    })
            }
        })
})


//count documents to count the result. it doesnt download any data just returns the count alone
app.get('/stats', (req, res) => {
    db.collection('resources').countDocuments().then(resCount => {
        db.collection('experiences').countDocuments().then(expCount => {
            res.send(`<body>
                <h2>Platform Statistics</h2>
                <p>Total Resources Shared: ${resCount}</p>
                <p>Total Placement Experiences: ${expCount}</p>
                </body>`)
        })
    })
})

