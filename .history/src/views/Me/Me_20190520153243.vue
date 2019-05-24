<template>
  <div class="me">
    个人中心
    <router-link v-if="!userInfo.id" tag="button" to="/login">登陆</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    // HelloWorld
  }
}
</script>
<style lang="stylus" scoped>
.me
  background #f5f5f5
  width 100%
  height 100%
</style>
