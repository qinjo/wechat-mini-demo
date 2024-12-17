Page({
  data: { 
    name: "",
    url: '',
   },
  buttonHandler(event) {
    console.log('<===== event', event.detail.userInfo.avatarUrl, '=====>');
    if (!event.detail.userInfo) return;
    this.setData({
      name: event.detail.userInfo.nickName,
      url: event.detail.userInfo.avatarUrl
    });
  },
});
