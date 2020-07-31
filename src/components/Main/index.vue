<template>
  <div class="layout">
    <v-header />
    <div class="layout-bottom">
      <sidebar />
      <div class="main" :style="{paddingLeft: !app.isCollapse ? '220px' : '64px'}">
        <tags-view />
        <v-main v-if="app.onReLoad"/>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from './components/Sidebar'
import VHeader from './components/VHeader.vue'
import VMain from './components/VMain.vue'
import TagsView from './components/TagsView.vue'
import { mixins } from '@/assets/js/mixin.js'
export default {
  name: 'layout',
  provide () {
    return {
      main: this
    }
  },
  mixins: [mixins],
  data () {
    return {
      msg: '这是layout组件'
    }
  },
  created () {
    if (this.$route.query.details === '1') {
      this.formDisabled = true
    } else {
      this.formDisabled = false
    }
  },
  watch: {
    $route () {
      if (this.$route.query.details === '1') {
        this.formDisabled = true
      } else {
        this.formDisabled = false
      }
    }
  },
  components: {
    Sidebar,
    VHeader,
    VMain,
    TagsView
  },
  inject: ['app']
}
</script>
<style lang="scss">
.layout {
  height: inherit;
  overflow: hidden;

  .main {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding-left: 220px;
  }

  .layout-bottom {
    width: 100%;
  }
}
</style>
