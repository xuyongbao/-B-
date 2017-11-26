Page({
    data: {
        "isOpenEye":false,
        "phoneNum":"13312345678",
        "passWordIsInput": false,
        "isSend": false,
        "time": '59',
        "smsNum":'',
        "passWord":""
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
    timeFly: function () {
      var self = this;
      var num = 59;
      var timer = setInterval(function () {
        num = num - 1;
        if (num == 0) {
          clearInterval(timer);
          self.setData({
            "isSend": false
          });
        }
        self.setData({
          "time": num
        })
      }, 1000)
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
    getSms: function () {
      this.setData({
        "isSend": true
      });
      this.timeFly();
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
      this.setData({
        "passWord":event.detail.value
      })
      if (this.data.smsNum.length >= 1 && this.data.passWord.length>=1){
        this.setData({
          "passWordIsInput":true
        })
      }else{
        this.setData({
          "passWordIsInput": false
        })
      }
    },
    ipt_sms: function (event) {
      console.log(event.detail);
      this.setData({
        "smsNum": event.detail.value
      })
      if (this.data.smsNum.length >= 1 && this.data.passWord.length >= 1) {
        this.setData({
          "passWordIsInput": true
        })
      } else {
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
