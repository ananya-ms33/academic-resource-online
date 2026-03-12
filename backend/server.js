const express = require('express')
const cors = require('cors')
const { MongoClient,ObjectId } = require('mongodb')

const app = express()

app.use(express.json())
app.use(cors())

let db

MongoClient.connect('mongodb://localhost:27017')

.then(client=>{

db = client.db('academicresourcehub')

app.listen(3000,()=>{
console.log("server running on port 3000")
})

})

.catch(err=>console.log(err))


app.get('/resources',async(req,res)=>{

const data = await db.collection('resources').find().toArray()

res.json(data)

})


app.post('/addresource',async(req,res)=>{

await db.collection('resources').insertOne({

title:req.body.title,
link:req.body.link

})

res.send("resource added")

})


app.get('/experiences',async(req,res)=>{

const data = await db.collection('experiences').find().toArray()

res.json(data)

})


app.post('/addexperience',async(req,res)=>{

await db.collection('experiences').insertOne({

company:req.body.company,
content:req.body.content

})

res.send("experience added")

})


app.delete('/deleteresource/:id',async(req,res)=>{

await db.collection('resources').deleteOne({
_id:new ObjectId(req.params.id)
})

res.send("deleted")

})


app.delete('/deleteexperience/:id',async(req,res)=>{

await db.collection('experiences').deleteOne({
_id:new ObjectId(req.params.id)
})

res.send("deleted")

})
app.post('/login',async(req,res)=>{

const user = await db.collection('users').findOne({

username:req.body.username,
password:req.body.password

})

if(user){

res.json({
success:true,
role:user.role
})

}

else{

res.json({
success:false
})

}

})

app.delete("/deleteresource/:id", async (req,res)=>{

await db.collection("resources").deleteOne({

_id:new ObjectId(req.params.id)

})

res.send("deleted")

})

app.delete("/deleteexperience/:id", async (req,res)=>{

await db.collection("experiences").deleteOne({

_id:new ObjectId(req.params.id)

})

res.send("deleted")

})