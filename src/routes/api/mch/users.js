/**
 * 用户
 */

const Router = require('koa-router')
const router = new Router()
const Admin = User = require('@/models/Admin')
const jwt = require('jsonwebtoken')
const { secretOrKey, domain, menus } = require('@/config/keys')
const passport = require('koa-passport')
const { paramNotCertf } = require('@/utils/utils')
const Moment = require('moment')

/**
 * @route POST /api/mch/user/register
 * @desc 注册接口地址
 * @acsess 接口公开 
 */
router.post('/register', async ctx => {
  const { email, name, account, password, avatar } = ctx.request.body
  const findResult = await User.find({email})
  if(findResult && findResult.length > 0) {
    ctx.body = {
      code: -1,
      message: '账号已存在',
      data: {}
    }
  } else {
    // 实例化数据
    const newUser = new User({
      name, email, account, password, avatar
    })
    // 存储到数据库
    await newUser.save()
    
    ctx.body = {
      code: 0,
      message: 'succuss',
      data: { ...ctx.request.body }
    }
  }
})

/**
 * @route GET /api/mch/user/login
 * @desc 登录接口地址
 * @acsess 接口公开 
 */
router.post('/login', async ctx => {
  const { auth, password } = ctx.request.body
  console.log(auth, '尝试登陆...', Moment().format('YYYY-MM-DD HH:mm:ss'))
  const user = await User.find({"$or": [{email: auth, password}, {account: auth, password}]})
  if(user && user.length > 0) {
    console.log(auth, '登录成功')
    // 验证通过
    const { id, name } = user[0]
    const payload = {
      id,
      name,
    }
    const token = jwt.sign(payload, secretOrKey, { expiresIn: 3600 })
    ctx.cookies.set(
      'token', 
      token,    //可替换为token
      {
        domain,  // 写cookie所在的域名
        path: '/',       // 写cookie所在的路径
        maxAge: 365 * 24 * 60 * 60 * 1000, // cookie有效时长
        expires: new Date('2021-02-15'),  // cookie失效时间
        httpOnly: false,  // 是否只用于http请求中获取
        overwrite: false  // 是否允许重写
      }
    )
    ctx.status = 200
    ctx.body = {
      code: 0,
      token,
      message: '登录成功'
    }
  } else {
    console.log(auth, '登录失败')
    ctx.status = 200
    ctx.body = {
      code: -1,
      message: '账号不存在或密码错误'
    }
  }
})

/**
 * @route POST /api/mch/user/current
 * @desc 获取用户信息接口地址
 * @acsess 接口私密
 */
router.post('/current', async (ctx) => {
  const token= ctx.cookies.get('token')
  if(token) {
    jwt.verify(token, secretOrKey, (error, decode) => {
      if(error) {
        paramNotCertf(ctx)
        return
      }
      const { id, name } = decode
      ctx.body = {
        code: 0,
        data: {
          id, name,
        }
      }
    })
  }
})

/**
 * @route POST /api/mch/user/currentUser
 * @desc 获取用户详细信息接口地址
 * @acsess 接口私密
 */
router.post('/currentUser', async (ctx) => {
  const token= ctx.cookies.get('token')
  if(token) {
    jwt.verify(token, secretOrKey, (error, decode) => {
      if(error) {
        paramNotCertf(ctx)
        return
      }
      const { id, name } = decode
      ctx.body = {
        code: 0,
        data: {
          userId: id, name, menus,
        }
      }
    })
  }
})

module.exports = router.routes()