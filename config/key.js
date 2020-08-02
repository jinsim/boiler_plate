if(process.env.NODE_ENV === 'production') { 
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}

// process.env.NODE_ENV 이게 환경변수인데, 개발이면 development로 나오고 배포한 후엔 production으로 나옴