const express = require('express')
const app = express()
const port = 5000
//db 연결 
const config = require('./config/key')
//req 를 쓰기위한 코드
const bodyParser = require('body-parser')
const { User } = require('./models/User.js')

//어플리케이션 형식 가져오는 코드 
app.use(bodyParser.urlencoded({extended: true}));

//어플리케이션.json
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false
}).then(() =>console.log('Mongoose Connected...'))
.catch(err =>console.log(err))



app.get('/', (req, res) => res.send( 'hello, world! hi serba'))

app.post('/register', (req, res) => {
    //회원가입 정보
    const user =  new User(req.body)

    user.save((err) => {
        if(err) return res.json({ success:false, err})
        return res.status(200).json({
            success: true
        })
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}`))