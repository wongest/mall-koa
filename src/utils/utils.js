/**
 * @desc 错误返回
 * @param {*} ctx 
 */
exports.paramError = (ctx) => {
  ctx.status = 200
  ctx.body = {
    code: -1,
    message: '参数错误'
  }
}

/**
 * @desc 成功无返回参数
 * @param {*} ctx 
 */
exports.successNoParam = (ctx) => {
  ctx.status = 200
  ctx.body = {
    code: 0,
    message: 'success'
  }
}

/**
 * @desc 无权限
 * @param {*} ctx 
 */
exports.paramNotCertf = (ctx) => {
  ctx.status = 200
  ctx.body = {
    code: 999,
    message: '请重新登录'
  }
}

/**
 * @desc 返回列表
 * @param {*} ctx 
 * @param {*} pageNum 
 * @param {*} numPerPage 
 * @param {*} result
 */
exports.listParam = (ctx, {pageNum, numPerPage}, result = []) => {
  const recordList = result.slice((pageNum - 1) * numPerPage, pageNum * numPerPage)
  ctx.status = 200
  ctx.body = {
    code: 0,
    message: 'success',
    data: {
      pageCount: parseInt(result.length / numPerPage) + 1,
      totalCount: result.length,
      currentPage: pageNum,
      recordList,
      numPerPage,
    }
  }
}