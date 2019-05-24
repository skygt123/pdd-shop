<template>
  <div class="home">
    推荐页
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Recommend',
  mounted () {
    this.$store.dispatch('reqRecommendShopLis') // 请求推荐数据
  },
  components: {
  }
}
</script>
