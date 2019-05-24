<template>
  <div class="user-detail">
    <div class="user-detail-top">基本信息</div>
    <div class="user-detail-group">
      <div class="user-icon">
        <span>头像</span>
        <img src="./images/me_icon.png" />
      </div>
      <div class="user-item">
        <span>手机</span>
        <span>188****8888</span>
      </div>
      <div class="user-item">
        <span>昵称</span>
        <span><input type="text" placeholder="xxxx"></span>
      </div>
      <div class="user-item">
        <span>性别</span>
        <span>未知</span>
      </div>
      <div class="user-item">
        <span>常住地</span>
        <span><input type="text" placeholder="xxxx"></span>
      </div>
      <div class="user-item">
        <span>生日</span>
        <span>未填写</span>
      </div>
      <div class="user-item">
        <span>个性签名</span>
        <span><input type="text" placeholder="xxxx"></span>
      </div>
      <cube-button @click="showPicker">Picker</cube-button>
    </div>
  </div>
</template>

<script>
const column1 = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
  { text: '幽鬼', value: '幽鬼' }]
export default {
  methods: {
    showPicker() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: 'Picker',
          data: [column1],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    }
  }
}
</script>

<style scoped lang='stylus' ref='stylesheet/stylus'>
.user-detail
  width 100%
  height 100%
  .user-detail-top
    height 60PX
    line-height 60PX
    padding-left 10PX
    font-weight bold
    font-size 18PX
  .user-detail-group
     .user-icon
      height 60PX
      padding  0 10PX
      background #ffffff
      border-bottom 1PX solid #e0e0e0
      display flex
      justify-content space-between
      align-items center
      font-size 16PX
      img
        width 50PX
        border-radius 50%
    .user-item
      height 40PX
      padding 0 10PX
      background #ffffff
      border-bottom 1PX solid #e0e0e0
      display flex
      justify-content space-between
      align-items center
      font-size 16PX
      input
        border none
        outline none
        text-align right
      button
        width 90%
        height 40PX
        line-height 40PX
        background #e9232c
        text-align center
    .right-title-color
      color #999
      font-size 14PX
</style>
