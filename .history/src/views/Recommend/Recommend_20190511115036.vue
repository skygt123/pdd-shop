<template>
  <div class="recommend-wrap">
    <ul class="recommend" v-if="recommendshoplist.length > 0">
      <list
        v-for="(item,index) in recommendshoplist"
        :item="item"
        :key="index"
        tag="li"
      >
        <template slot="button">
          <!-- <button class="item-button">找相关</button> -->
          <span class="item-user">
            <img src="http://t20img.yangkeduo.com/a/7bb7677358604fcc75c86f37a2a567cfa1107684-1534773680?imageMogr2/thumbnail/100x" />
            <img src="http://t20img.yangkeduo.com/a/7bb7677358604fcc75c86f37a2a567cfa1107684-1534773680?imageMogr2/thumbnail/100x" />
          </span>
        </template>
      </list>
      <!-- <li class="recommend-item">
        <img :src="item.thumb_url" alt="" width="100%" />
        <h4 class="item-title">{{item.short_name}}</h4>
        <div class="item-bottom">
          <span class="item-price">￥{{item.price / 100}}</span>
          <span class="item-sales">{{item.sales_tip}}</span>
          <button class="item-button">找相关</button>
        </div>
      </li> -->
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import List from 'components/List/List'
export default {
  name: 'Recommend',
  mounted () {
    this.$store.dispatch('reqRecommendShopLis') // 请求推荐数据
  },
  computed: {
    ...mapState(['recommendshoplist'])
  },
  components: {
    List
  }
}
</script>
<style lang="stylus" scoped>
.recommend-wrap
  background #f5f5f5
  width 100%
  height 100%
  .recommend
    display flex
    flex-direction row
    flex-wrap wrap
    margin-bottom 100px
</style>
