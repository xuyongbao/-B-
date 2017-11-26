Page({
    data: {
      "currentTab": 0,
      "drop": true,
      "drop1": true,
      "drop2": false,
      "drop3": false
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
       
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
    swichNav:function(event){
      this.setData({
        "currentTab": event.currentTarget.dataset.current
      })
    },
    drop: function (event) {
      var drop = !this.data[event.currentTarget.dataset.drop];
      this.setData({
        [event.currentTarget.dataset.drop]:drop
      })
      console.log(this.data)
    }

})
