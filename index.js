const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kwongu14:kimgu939@testreact.qycaw.mongodb.net/TestReact?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false
}).then(() =>console.log('Mongoose Connected...'))
.catch(err =>console.log(err))


app.get('/', (req, res) => res.send( 'hello, world!'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))