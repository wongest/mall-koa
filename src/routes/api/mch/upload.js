const { apiUrl } = require('@/config/keys')
const Router = require('koa-router')
const router = new Router()

/**
 * @route POST api/mch/upload
 * @desc 上传图片接口地址
 * @acsess 接口私密
 */
router.post('/image', async ctx => {
  const { file : { size, path, name, type }} = ctx.request.files;
  const url = path.match(/upload_.+/g)[0]
  ctx.body = {
    code: 0,
    data: {
      size, imgUrl: `${apiUrl}upload/${url}`, name
    }
    
  }
})

module.exports = router.routes()