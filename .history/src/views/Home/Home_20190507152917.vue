<template>
  <div class="home">
      <cube-tab-bar
    v-model="selectedLabelSlots"
    show-slider
    inline
    @click="clickHandler">
    <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
      <!-- name为icon的插槽 -->
      <i slot="icon" :class="item.icon"></i>
      <!-- 默认插槽 -->
      {{item.label}}
    </cube-tab>
  </cube-tab-bar>
      
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
   data () {
    return {
      selectedLabelSlots: 'Like',
      tabs: [{
        label: 'Home',
        icon: 'cubeic-home'
      }, {
        label: 'Like',
        icon: 'cubeic-like'
      }, {
        label: 'Vip',
        icon: 'cubeic-vip'
      }, {
        label: 'Me',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    }
  }
}
</script>
