Page({
    data: {
        "passWordIsInput":false,
        "isSend":false,
        "time":'59'
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
    timeFly:function(){
      var self = this;
      var num = 59;
      var timer = setInterval(function(){
        num = num -1;
        if(num == 0){
          clearInterval(timer);
          self.setData({
            "isSend": false
          });
        }
        self.setData({
          "time":num
        })
      },1000)
    },
    renderPhoneNum:function(){
      var phone = getApp().globalData.userPhoneNum ;
      var newPhone = '';
      for(var i=0; i<phone.length; i++){
        if(i == 3 || i == 7){
          newPhone += " " + phone[i];
        }else{
          newPhone += phone[i];
        }
      }
      this.setData({
        "phoneNum":newPhone
      })
    },
    getSms:function (){
      this.setData({
        "isSend": true
      });
      this.timeFly();
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
    
   

})
