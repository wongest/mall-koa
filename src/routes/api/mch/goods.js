/**
 * 商品
 */

const Router = require('koa-router')
const router = new Router()
const Admin = User = require('@/models/Admin')
const Goods = require('@/models/Goods')
const jwt = require('jsonwebtoken')
const { secretOrKey, domain, menus } = require('@/config/keys')
const passport = require('koa-passport')
const { paramNotCertf, listParam, paramError } = require('@/utils/utils')
const Moment = require('moment')
const uuidv1 = require('uuid').v1;

/**
 * @route POST /api/mch/goods/add
 * @desc 新增商品
 * @acsess 接口私密
 */
router.post('/add', async (ctx) => {
  const token = ctx.cookies.get('token')
  if (token) {
    await jwt.verify(token, secretOrKey, async (error, decode) => {
      if (error) {
        paramNotCertf(ctx)
        return
      }
      // const { id, name } = decode
      // // 实例化数据
      const newGoods = new Goods({
        id: uuidv1(),
        ...ctx.request.body
      })
      // 存储到数据库
      await newGoods.save()
      ctx.body = {
        code: 0,
        message: 'success'
      }
    })
  }
})

/**
 * @route POST /api/mch/goods/list
 * @desc 获取商品列表
 * @acsess 接口私密
 */
router.post('/list', async (ctx) => {
  const token = ctx.cookies.get('token')
  if (token) {
    await jwt.verify(token, secretOrKey, async (error, decode) => {
      if (error) {
        paramNotCertf(ctx)
        return
      }
      let { pageNum = 1, numPerPage = 10, name: goodsName = '', } = ctx.request.body
      try {
        pageNum = Number(pageNum)
        numPerPage = Number(numPerPage)
      } catch (e) {
        paramError(ctx)
        return
      }
      const reg = new RegExp(goodsName, 'i')
      const result = await Goods.find({
        $or: [
          { title: { $regex: reg } },
        ]
      },
        { id: 1, type: 1, title: 1, cover: 1, images: 1, desc: 1, createTime: 1, _id: 0 }
      )
      listParam(ctx, { pageNum, numPerPage }, result)
    })
  }
})



module.exports = router.routes()