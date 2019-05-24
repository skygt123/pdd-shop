<template>
 <div class="me-setting" >
   <cell left-icon="itlike-1" left-title="免密支付设置"></cell>
   <cell left-icon="itlike-2" left-title="免密支付设置"></cell>
   <cell left-icon="itlike-3" left-title="免密支付设置"></cell>
   <cell left-icon="itlike-4" :deadClickCell="clickCell" left-title="免密支付设置"></cell>
   <cell left-icon="itlike-5" left-title="免密支付设置" right-title="接收" right-Title-Color="orange"></cell>
 </div>
</template>

<script>
import Cell from 'views/Me/Cell'
export default {
  data () {
    return {

    }
  },
  methods: {
    deadClickCell (props) {
      console.log(`点击了${props}`)
    }
  },
  components: {
    Cell
  }
}
</script>

<style scoped lang='stylus' ref='stylesheet/stylus'>

</style>
