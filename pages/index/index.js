// pages/index/index.js
var app = getApp()  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '../../images/czsm_banner@2x.png'
      },
       {
        link: '/pages/index/index',
        url: '../../images/Group 13@2x.png'
      },
      {
      link: '/pages/index/index',
      url: '../../images/czsm_banner@2x.png'
      },
      {
        link: '/pages/index/index',
        url: '../../images/Group 13@2x.png'
      }
    ],
    navList:[
      {
        link: '/pages/index/index',
        url: '../../images/zf_btn@2x.png'
      },
      {
        link: '/pages/index/index',
        url: '../../images/fbmf_btn@2x.png'
      },
      {
        link: '/pages/index/index',
        url: '../../images/tjkh_btn@2x.png'
      },
      {
        link: '/pages/index/index',
        url: '../../images/zf_btn@2x.png'
      },
      {
        link: '/pages/index/index',
        url: '../../images/fbmf_btn@2x.png'
      },
      {
        link: '/pages/index/index',
        url: '../../images/tjkh_btn@2x.png'
      }
    ],

    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular:true
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
    var that = this
    return {
      title: "房屋B端小程序",
      path: '/pages/index/index',
      success: function (res) {
        wx.showShareMenu({
          shareTicket: '房屋B端小程序',
          withShareTicket: true
        })
      },
      fail: function (res) {
        console.log("转发失败")
      }
    }
  }
})