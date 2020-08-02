const express = require('express')
// 익스프레스를 가져옴 
const app = express()
// 함수를 이용해 새로운 espress앱을 만들고 
const port = 5000
// 아무렇게나 해도 됨. 우린 5000번 포드를 백 서버로 둠. 

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jinsim:1234@cluster0.6qw4v.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))
// 몽고DB연결 , npm run start

app.get('/', (req, res) => res.send('Hello World!'))
// 루트디렉토리에 hello world를 출력되게 하는 것. 

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))