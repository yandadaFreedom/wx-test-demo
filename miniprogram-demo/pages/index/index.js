// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '跳转H5页面',
  },
  jumpPage () {
    wx.navigateTo ({
      url: '/pages/webview/index'
    })

  }
})
