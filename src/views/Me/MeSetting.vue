<template>
 <div class="me-setting" >
  <cell left-icon="itlike-1" left-title="免密支付设置"></cell>
  <cell left-icon="itlike-2" left-title="免密支付设置"></cell>
  <cell left-icon="itlike-3" left-title="免密支付设置"></cell>
  <cell left-icon="itlike-4" :clickCell="deadClickCell" left-title="免密支付设置"></cell>
  <cell left-icon="itlike-5" left-title="免密支付设置" right-title="接收" right-Title-Color="orange"></cell>
  <div class="logut" @click="logutClick()">退出登陆</div>
 </div>
</template>

<script>
import Cell from 'views/Me/Cell'
import { mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  methods: {
    deadClickCell (props) {
      console.log(`点击了${props}`)
    },
    logutClick () {
      console.log(`您确定退出登陆吗？`)
      this.logOut({}) // 退出登陆
      this.$router.push('/home')
    },
    // ...mapActions(['logout'])
    ...mapActions(['logOut'])
  },
  components: {
    Cell
  }
}
</script>

<style scoped lang='stylus' ref='stylesheet/stylus'>
.me-setting
  width 100%
  height 100%
  background #ececec
  .logut
    line-height 40PX
    height 40PX
    background #fff
    text-align center
    margin-top 10PX
    font-size 18px
</style>
