<template>
    <div class="hot">
      <cube-slide ref="slide" 
        :data="items" 
        @change="changePage"
        :loop="loop"
        :auto-play="true"
      >
        <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
          <a :href="item.url">
            <img :src="item.image">
          </a>
        </cube-slide-item>
      </cube-slide>
    </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
        }, {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
        }, {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
        }
      ]
    }
  },
  methods: {
    changePage (current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler (item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot
    width 100%
    height 100%
    padding-top: 94px
</style>
