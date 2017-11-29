Page({
    data: {
      usrName:'',
      phoneNum:""
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
      
       
    },
    onReady: function () {
        // 生命周期函数--监听页面初次渲染完成
      this.setData({
        userName: getApp().globalData.userName,
        phoneNum: getApp().globalData.userPhoneNum
      })
      this.renderPhoneNum();
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
    renderPhoneNum:function(){
      var num = this.data.phoneNum;
      var s = '';
      for(var i=0; i<num.length; i++){
        if(i>2 && i<7){
          s+="*";
        }else{
          s+=num[i];
        }
      }
      this.setData({
        phoneNum:s
      });
    },
    changePage:function(){
      wx.navigateTo({
        url: '../login/index',
      })
    },
    upDataPic:function(){
      wx.showActionSheet({
        itemList: ['拍照', '从相册中选择'],
        success: function (res) {
          console.log(res.tapIndex);
          if(res.tapIndex == 0){
            wx.chooseImage({
              count: 1, // 默认9
              sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
              sourceType: [ 'camera'], // 可以指定来源是相册还是相机，默认二者都有
              success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths
              }
            })
          }else{
            wx.chooseImage({
              count: 1, // 默认9
              sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
              sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
              success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths;
                
              }
            })
          }
        },
        fail: function (res) {
          console.log(res.errMsg)
        }
      })
    }
   

})
