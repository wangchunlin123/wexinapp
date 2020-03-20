// pages/mine/mine.js
let { baseUrl } = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    islogin: "none",
    notlogin: "block",
    petusers: [],
    nowusers: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'petusers',
      success: (res) => {
        this.setData({ petusers: res.data });
        if (this.data.petusers.length > 0) {
          this.setData({ islogin: "block" });
          this.setData({ notlogin: "none" })
        };
        wx.request({
          url: `${baseUrl}/hosts`,
          success: ({ data }) => {
            let mydata = data.filter((item) => {
              return item.memberPhone == this.data.petusers[0].memberPhone
            });
            this.setData({ nowusers: mydata });
            
          }
        });
      }
    });

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

  },
  peoplelogin() {
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  peoplereg() {
    wx.navigateTo({
      url: '/pages/reg/reg'
    })
  },
  minetoshopping() {
    wx.switchTab({
      url: '/pages/shopping/shopping'
    })
  },
  minetoorder() {
    wx.navigateTo({
      url: '/pages/orders/orders'
    })
  },
  quitelogin() {
    wx.removeStorage({
      key: 'petusers',
      success: () => {
        this.setData({ islogin: "none" });
        this.setData({ notlogin: "block" });
      }
    })
  }
})