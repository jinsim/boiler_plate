const express = require('express')
// 익스프레스를 가져옴 
const app = express()
// 함수를 이용해 새로운 espress앱을 만들고 
const port = 5000
// 아무렇게나 해도 됨. 우린 5000번 포드를 백 서버로 둠. 
const bodyParser = require('body-parser');
// body-parser을 가져옴
const config = require('./config/key');
// 키에서 정보 가져오기

const { User } = require("./models/User");
// 유저 모델 가져오기 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// bodyparser 옵션 주기. bodyparser가 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해주는 것임.  윗 부분은 application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져올 수 있게 해주는 것. 아랫 부분은 application/json타입으로 된 것을 분석해서 가져올 수 있게 해주는 것. 이 정보들을 DB에 넣기 위해서는 req.body로 User에 넣으면 됨. 

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))
// 몽고DB연결 , npm run start
// 깃허브에 소스코드를 올릴 때 위에 있는 비밀번호까지 같이 들어갈 수 있음. 

app.get('/', (req, res) => res.send('Hello World!!'))
// 루트디렉토리에 hello world를 출력되게 하는 것. 

// 회원가입을 위한 route
app.post('/register', (req, res) => {
    const user = new User(req.body)
    //가져온 유저를 이용해서 인스턴스를 만들었음. 

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
    // 몽고db에서 오는 메소드, 이렇게 save해주면 정보들이 user모델에 저장된 것. 그 뒤에 콜백 함수가 옴.
    // 만약 에러가 있으면 클라이언트에 json형식으로 전달. 에러메시지도 함께. 성공을 했으면 (status 200은 성공했다는 표시 ) json으로 전달 
})
// post 매소드, route의 endpoint는 register, call back function을 request, response. 클라이언트에서 보내주는 이름과 이메일, 패스워드 등의 정보를 클라이언트에서 가져오면 그것들을 DB에 넣어준다. 그렇게 하기 위해서는 유저 모델을 가져와야함. 



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))