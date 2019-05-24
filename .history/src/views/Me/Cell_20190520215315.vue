<template>
  <div class="cell" @click="clickCell(leftTitle)">
    <div class="cell-left" :style="{ color: leftTitleColor }">
      <i :class="leftIcon" ></i>
      <span v-show="leftTitle">{{leftTitle}}</span>
    </div>
    <div class="cell-right">
      <span v-show="rightTitle">{{rightTitle}}</span>
      <i v-show="isShowrightArrow" class="itlike-uniE909"></i>
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
    isShowrightArrow: { type: Boolean, default: false },
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
