// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    likeCount: {
      type : Number,
    },
    like :{
      type:Boolean,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeIcon: './images/like.png',
    unLikeIcon: './images/unLike.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function (event) {
      console.log(event)
      let count = this.properties.likeCount;
      count = this.properties.like ? count - 1 :count + 1
      this.setData({
        like: !this.properties.like,
        likeCount: count,
      })
    }
  }
})
