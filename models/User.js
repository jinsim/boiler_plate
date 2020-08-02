const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, 
        // 스페이스바 없애주는 거 
        unique: 1
        // 똑같은 이메일 쓰지 못하게 
    },
    password: {
        type: String,
        maxlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
        // 넘버가 1이면 관리자 뭐 이런식
    },
    image: String,
    token: {
        type: String
        // 나중에 유효성을 관리 가능
    },
    tokenExp: {
        type: Number
        // 토큰 유효기간
    }
})

const User = mongoose.model('User', userSchema);
// 스키마를 모델로 감싸줌 

module.exports= { User }
// 이 모델을 다른 파일에서도 쓸 수 있게 