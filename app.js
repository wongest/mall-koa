const koa = require('koa')
const Router = require('koa-router')
const mongoose = require('mongoose')
const passport = require('koa-passport')
const cors = require('koa2-cors');
const WebSocket = require('koa-websocket');
require('module-alias/register')
const chalk = require('chalk');
const log = console.log;

const { port, mongoURL } = require('@/config/keys')

// 实例化koa
const app = WebSocket(new koa());
const router = new Router()

// 允许跨域
app.use(cors())

// 配置koa-body
const koaBody = require('koa-body');
app.use(koaBody())

// 静态文件
app.use(require('koa-static')(__dirname + '/public'))

// 链接数据库
mongoose.connect(mongoURL,
  {useNewUrlParser:true,useUnifiedTopology: true}
)
  .then(() => {
    log(chalk.yellow('数据库连接'))
    // 初始化passport
    app.use(passport.initialize())
    app.use(passport.session())
    // 回调到passport.js文件中
    // require('./config/passport')(passport)
  })
  .catch(err => {
    console.log(err)
  })

const Api = require('@/routes/router')
const api = new Api()
api.achieve(router)

// 配置路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
  log(chalk.yellow(`监听-${port}`))
})