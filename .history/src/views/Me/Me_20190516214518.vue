<template>
  <div class="me">
    个人中心
    <router-link v-if="userInfo" tag="button" to="/login">登陆</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['userInfo.id'])
  },
  components: {
    // HelloWorld
  }
}
</script>
<style lang="stylus" scoped>
.me
  background red
</style>
