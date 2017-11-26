// pages/release/release.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: true,
    value1: "绿地米兰公寓",
    value2: "",
    value3: "",
    value4: "",
    value5: "周末",
    value6: "",
    value7: 0,
    checkBl: true,
    checkecd: "checked",
    timeIndex: 0,
    isPhoneNum:false,
    timeArray: ['周末', '工作日', '随时']
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

  },
  checkout: function (event) {
    this.setData({
      [event.currentTarget.dataset.key]: event.detail.value
    })
    var bl = true;
    for (var i = 0; i < 7; i++) {
      var key = "value" + (i + 1);
      if (this.data[key] == "" || this.data[key].length <= 0) {
        bl = true;
        break;
      } else {
        bl = false
      }
    }
    this.setData({
      disabled: bl
    })
  },
  checkAgree: function (e) {
    var onOff = this.data.checkBl;
    if (onOff) {
      this.setData({
        value7: 1,
        checkecd: "checkecd"
      })
    } else {
      this.setData({
        value7: "",
        checkecd: ""
      })
    }
    var bl = true;
    for (var i = 0; i < 7; i++) {
      var key = "value" + (i + 1);
      if (this.data[key] == "" || this.data[key].length <= 0) {
        bl = true;
        break;
      } else {
        bl = false
      }
    }
    this.setData({
      disabled: bl
    })
    this.data.checkBl = !this.data.checkBl;
  },
  timeSelect: function (e) {
    var _this = this;
    wx.showActionSheet({
      itemList: ['周末', '工作日', '随时'],
      success: function (res) {
        _this.setData({
          timeIndex: res.tapIndex
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }

    })
  },
  submit:function(){
    var _this = this;
    _this.ipt_num();
    if (_this.data.isPhoneNum){
      wx.showModal({
        title: '提交成功',
        content: '物业房屋管家会尽快跟进房源信息',
        showCancel: false,
        confirmText: "我知道了",
        confirmColor: "#C81528"
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '请输入正确的手机号码',
        showCancel: false,
        confirmText: "确定",
        confirmColor: "#C81528"
      })
    }
    
  },
  ipt_num: function () {
    var teleReg = /^((0\d{2,3})-)(\d{7,8})$/;
    var mobileReg = /^1[3456789]\d{9}$/;
    var telephone = this.data.value4;
    if (!teleReg.test(telephone) && !mobileReg.test(telephone)) {
      this.setData({
        "isPhoneNum": false
      })
    } else {
      this.setData({
        "isPhoneNum": true
      })
    }
  }
})