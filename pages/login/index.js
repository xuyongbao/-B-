Page({
    data: {
        "isPhoneNum":false,
        "isOpen":true,
        "isRegister":false,
        "isOpenEye":false,
        "phoneNum":"13312345678",
        "passWordIsInput":false
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
       
      this.renderPhoneNum();
    },
    onReady: function () {
        // 生命周期函数--监听页面初次渲染完成
       
       
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
    goToRegister:function(){
      wx.navigateTo({
        url:"../register/index"
      })
    },
    renderPhoneNum: function () {
      var phone = this.data.phoneNum;
      var newPhone = '';
      for (var i = 0; i < phone.length; i++) {
        if (i == 3 || i == 7) {
          newPhone += " " + phone[i];
        } else {
          newPhone += phone[i];
        }
      }
      this.setData({
        "phoneNum": newPhone
      })
    },
    changeOpenEye:function (){
      this.setData({
        "isOpenEye": true
      })
    },
    changeCloseEye: function () {
      this.setData({
        "isOpenEye": false
      })
    },
    ipt_pass_word:function(event){
      console.log(event.detail);
      if(event.detail.cursor >= 1){
        this.setData({
          "passWordIsInput":true
        })
      }else{
        this.setData({
          "passWordIsInput": false
        })
      }
    },
    ipt_num: function (event) {
      var teleReg = /^((0\d{2,3})-)(\d{7,8})$/;
      var mobileReg = /^1[3456789]\d{9}$/;
      var telephone = event.detail.value;
      if (!teleReg.test(telephone) && !mobileReg.test(telephone)) {
        this.setData({
          "isPhoneNum":false
        })
      } else {
        this.setData({
          "isPhoneNum": true
        })
      }
    },
    calling: function () {
      wx.makePhoneCall({
        phoneNumber: '12345678900',  
        success: function () {
          console.log("拨打电话成功！")
        },
        fail: function () {
          console.log("拨打电话失败！")
        }
      })
    }  

})
