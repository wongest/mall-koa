const domain = 'localhost'
const port = 3000

const menus = [
  {
    "resourceId": "MA01",
    "name": "首页",
    "url": "/home",
    "type": "1",
    "icon": null,
    "pid": "0",
    "sort": null,
    "children": null
  },
  {
    "resourceId": "MA02",
    "name": "商城管理",
    "url": "/mall",
    "type": "1",
    "icon": null,
    "pid": "0",
    "sort": null,
    "children": [
      {
        "resourceId": "MA0201",
        "name": "交易统计",
        "url": "/mall/statistic",
        "type": "1",
        "icon": null,
        "pid": "MA02",
        "sort": null,
        "children": [
          {
            "resourceId": "MA020101",
            "name": "商城统计",
            "url": "/mall/statistic/market",
            "type": "1",
            "icon": null,
            "pid": "MA0201",
            "sort": null,
            "children": null
          },
          {
            "resourceId": "MA020102",
            "name": "商品统计",
            "url": "/mall/statistic/goods",
            "type": "1",
            "icon": null,
            "pid": "MA0201",
            "sort": null,
            "children": null
          }
        ]
      },
      {
        "resourceId": "MA0202",
        "name": "订单管理",
        "url": "/mall/order",
        "type": "1",
        "icon": null,
        "pid": "MA02",
        "sort": null,
        "children": [
          {
            "resourceId": "MA020201",
            "name": "订单管理",
            "url": "/mall/order/manage",
            "type": "1",
            "icon": null,
            "pid": "MA0202",
            "sort": null,
            "children": null
          },
          {
            "resourceId": "MA020202",
            "name": "售后管理",
            "url": "/mall/order/aftersales",
            "type": "1",
            "icon": null,
            "pid": "MA0202",
            "sort": null,
            "children": null
          }
        ]
      },
      {
        "resourceId": "MA0203",
        "name": "商品库",
        "url": "/mall/goods",
        "type": "1",
        "icon": null,
        "pid": "MA02",
        "sort": null,
        "children": null
      },
      {
        "resourceId": "MA0204",
        "name": "商城管理",
        "url": "/mall/mallmng",
        "type": "1",
        "icon": null,
        "pid": "MA02",
        "sort": null,
        "children": [
          {
            "resourceId": "MA020401",
            "name": "首页管理",
            "url": "/mall/mallmng/home",
            "type": "1",
            "icon": null,
            "pid": "MA0204",
            "sort": null,
            "children": null
          },
          {
            "resourceId": "MA020402",
            "name": "类目管理",
            "url": "/mall/mallmng/column",
            "type": "1",
            "icon": null,
            "pid": "MA0204",
            "sort": null,
            "children": null
          },
          {
            "resourceId": "MA020403",
            "name": "商城设置",
            "url": "/mall/mallmng/setting",
            "type": "1",
            "icon": null,
            "pid": "MA0204",
            "sort": null,
            "children": null
          }
        ]
      },
      {
        "resourceId": "MA0205",
        "name": "虚拟产品核销",
        "url": "/mall/virtual",
        "type": "1",
        "icon": null,
        "pid": "MA02",
        "sort": null,
        "children": null
      }
    ]
  },
  {
    "resourceId": "MA03",
    "name": "系统管理",
    "url": "/system",
    "type": "1",
    "icon": null,
    "pid": "0",
    "sort": null,
    "children": [
      {
        "resourceId": "MA0301",
        "name": "账号管理",
        "url": "/system/account",
        "type": "1",
        "icon": null,
        "pid": "MA03",
        "sort": null,
        "children": null
      },
      {
        "resourceId": "MA0302",
        "name": "密码管理",
        "url": "/system/password",
        "type": "1",
        "icon": null,
        "pid": "MA03",
        "sort": null,
        "children": null
      }
    ]
  }
]

module.exports = {
  port,
  domain,
  mongoURL: 'mongodb://admin:123456s@127.0.0.1:27017/test01',
  secretOrKey: 'secret',
  apiUrl: `http://${domain}:${port}/`,
  menus,
}





