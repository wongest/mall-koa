const koaBody = require('koa-body')
const path = require('path')

// 引入api
const users = require('@/routes/api/users')
const upload = require('@/routes/api/upload')
const video = require('@/routes/api/video')

// mch后台端
const mUser = require('@/routes/api/mch/users')
const mGoods = require('@/routes/api/mch/goods')
const mUpload = require('@/routes/api/mch/upload')

const Api = function() {}

Api.prototype.achieve = (router) => {
  // 上传
  router.use('/api/upload', koaBody({
    multipart:true, // 支持文件上传
    encoding:'gzip',
    formidable:{
      uploadDir: path.resolve(__dirname, '../../public/upload/'), // 设置文件上传目录
      keepExtensions: true,    // 保持文件的后缀
      maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
      onFileBegin: (name,file) => { // 文件上传前的设置
      },
    }
  }),upload)
  router.use('/api/mch/upload', koaBody({
    multipart:true, // 支持文件上传
    encoding:'gzip',
    formidable:{
      uploadDir: path.resolve(__dirname, '../../public/upload/'), // 设置文件上传目录
      keepExtensions: true,    // 保持文件的后缀
      maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
      onFileBegin: (name,file) => { // 文件上传前的设置
      },
    }
  }),mUpload)
  router.use('/api/user', users)
  router.use('/api/video', video)
  router.use('/api/mch/user', mUser)
  router.use('/api/mch/goods', mGoods)
}

module.exports = Api