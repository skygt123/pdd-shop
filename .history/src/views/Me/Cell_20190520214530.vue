<template>
  <div class="cell">
    <div class="cell-left">
      <i class="itlike-6"></i>
      <span>免密支付设置</span>
    </div>
    <div class="cell-right">
      <span>测试</span>
      <i class="itlike-uniE909"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    leftTitle: { type: String, default: '' },
    leftTitleColor: { type: String, default: '#333' },
    leftIcon: { type: String, default: '' },
    rightTitle: { type: String, default: '' },
    rightTitleColor: { type: String, default: '#666' },
    isShowrightArrow: { type: Boolean, default: true },
    clickCell: {
      type: Function,
      default: () => {}
    }
  },
  components: {

  }
}
</script>

<style scoped lang='stylus' ref='stylesheet/stylus'>
.cell
  height 44PX
  background #ffffff
  display flex
  justify-content space-between
  align-items center
  padding 0 10PX
  border-bottom 1PX solid #ececec
  .cell-left
  .cell-right
    display flex
    align-items center
    font-size 14PX
    i
      margin-right 5PX
      width 14PX
</style>
