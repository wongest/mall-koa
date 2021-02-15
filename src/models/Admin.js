const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化数据模板
const AdminSchema = new Schema({
  email: {
    type: 'String',
    required: true
  },
  name: {
    type: 'String',
    required: true
  },
  account: {
    type: 'String',
    required: true
  },
  password: {
    type: 'String',
    required: true
  },
  avatar: {
    type: 'String',
  },
  date: {
    type: 'Date',
    default: Date.now
  },
})

module.exports = Admin = mongoose.model('admin', AdminSchema)