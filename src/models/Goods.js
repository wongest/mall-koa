const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化数据模板
const GoodsSchema = new Schema({
  id: {
    type: 'String',
    required: true
  },
  type: {
    type: 'String',
    required: true
  },
  title: {
    type: 'String',
    required: true
  },
  cover: {
    type: 'String',
    required: false
  },
  images: {
    type: 'Array',
    required: false
  },
  desc: {
    type: 'String',
    required: false
  },
  createTime: {
    type: 'Date',
    default: Date.now
  },
  saleNum: {
    type: 'Number',
    default: 0,
  },
  collectNum: {
    type: 'Number',
    default: 0,
  },
  stock: {
    type: 'Number',
    default: 0,
  },
})

module.exports = Goods = mongoose.model('goods', GoodsSchema)