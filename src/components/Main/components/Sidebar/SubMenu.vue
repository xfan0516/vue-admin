<template>
  <el-menu-item v-if="item.children.length === 0" :class="!level && 'el-submenu__title'" :index="item.id"
                @click="link(item)"
  >
    <!-- <el-menu-item v-if="item.children.length == 0" :index="item.id"
                  @click="link(item)"
    > -->
    <i v-if="!level" :class="item.icon" />
    <!-- <i :class="'el-icon-s-' + item.icon" /> -->
    <span slot="title">{{ item.name }}</span>
  </el-menu-item>
  <el-submenu v-else :index="item.id">
    <div slot="title">
      <!-- <i :class="'el-icon-s-' + item.icon" /> -->
      <i v-if="!level" :class="item.icon" />
      <span slot="title">{{ item.name }}</span>
    </div>
    <template v-if="item.children && item.children.length">
      <submenu
        v-for="items in item.children"
        :key="items.id"
        :item="items"
        :level="level + 1"
      />
    </template>
  </el-submenu>
</template>
<script>
export default {
  name: 'submenu',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    level: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      msg: '这是itemmenu组件'
    }
  },
  created () {
    // console.log(this.level)
  },
  methods: {
    link (item) {
      if (this.$route.path !== `${item.url}`) {
        this.$router.push(`${item.url}`)
      } else {
        this.app.reLoad()
        // this.$router.push(`/${item.url}`)
      }
      console.log(item.url, this.$route.path, item.id)
    }
  },
  inject: ['app']
}
</script>
<style lang="scss">
.itemmenu {
  height: inherit;
}
</style>
