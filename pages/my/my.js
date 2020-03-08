// pages/my.js
const width = wx.getSystemInfoSync().windowWidth
Page({
  options: {
    addGlobalClass: true,
  },
  /**
   * 页面的初始数据
   */
  data: {
      footerwidth:width,
      collectnumber:0,
      indexcollectiondata:null,
      iconUrlimg:'https://b.yzcdn.cn/vant/icon-demo-1126.png',
      show: false,
      steps: [
        {
          text: '我的设置',
          desc: ''
        },
        {
          text: '购物车',
          desc: ''
        },
        {
          text: '会员特权',
          desc: ''
        }
      ],
      active:1
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getUserInfo({
      complete: (res) => {
        let myname = res.userInfo.nickName
        this.setData({
          username:myname
        })
      },
    });
    //获取主页点击收藏的数据存储信息
    var app = getApp()
    var indexcollectionglobaldata = app.globalData.indexclloction
    var peoductNumber = indexcollectionglobaldata.length
    this.setData({
      collectnumber:peoductNumber
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})