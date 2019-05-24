<template>
  <div class="home">
    <cube-tab-bar v-model="selectedLabel"
                  show-slider
                  :use-transition="disabled"
                  ref="tabNav"
                  :data="tabLabels">
    </cube-tab-bar>
  <!-- <cube-tab-bar v-model="selectedLabel" show-slider>
    <cube-tab v-for="(item, index) in tabs" :icon="item.icon" :label="item.label" :key="item.label">
    </cube-tab>
  </cube-tab-bar>
  <cube-tab-panels v-model="selectedLabel">
    <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="item.label">
      <ul>
        <li class="tab-panel-li" v-for="(hero, index) in item.heroes">
          {{hero}}
        </li>
      </ul>
    </cube-tab-panel>
  </cube-tab-panels> -->
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedLabel: '天辉',
      tabs: [{
        label: '天辉',
        icon: 'cubeic-like',
        heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵', '幻影长矛手', '复仇之魂', '力丸', '矮人狙击手', '圣堂刺客', '露娜', '赏金猎人', '熊战士']
      }, {
        label: '夜魇',
        icon: 'cubeic-star',
        heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
      }]
    }
  }
}
</script>
