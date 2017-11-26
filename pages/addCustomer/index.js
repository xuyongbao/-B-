Page({
    data: {
      "tipsShow":true,
      "sex":"0",
      "buyType":"0",
      "checked":"checked",
      "disabled": true,
      "value1": "",
      "value2": "",
      "value3": "绿地公馆",
      "value4": "1"
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
       
    },
    onReady: function () {
        // 生命周期函数--监听页面初次渲染完成
      wx.getSystemInfo({
        success: function (res) {
          console.log(res)
        }
      })
       
    },
    onShow: function () {
        // 生命周期函数--监听页面显示

    },
    onHide: function () {
        // 生命周期函数--监听页面隐藏

    },
    onUnload: function () {
        // 生命周期函数--监听页面卸载

    },
    closeTips:function(){
      this.setData({
        'tipsShow':false
      })
    },
    changeMan: function () {
      this.setData({
        sex: "0"
      })
    },
    changeLady: function () {
      this.setData({
        sex: "1"
      })
    },
    changeRent: function () {
      this.setData({
        buyType: "0"
      })
    },
    changeBuy: function () {
      this.setData({
        buyType: "1"
      })
    },
    checkAgree:function(){
      if(this.data.checked == ""){
        this.setData({
          checked:"checked",
          value4:"1"
        })

      }else{
        this.setData({
          checked:"",
          value4:""
        })
      }

      var bl = true;
      for (var i = 0; i < 4; i++) {
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
    checkout: function (event) {
      this.setData({
        [event.currentTarget.dataset.key]: event.detail.value
      })
      console.log(event.currentTarget.dataset.key)
      var bl = true;
      for (var i = 0; i < 4; i++) {
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
    goToLoc:function(){
      wx.navigateTo({
        url: '../sctVillage/sctVillage',
      })
    }

})
