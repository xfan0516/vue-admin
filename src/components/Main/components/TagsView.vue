<template>
  <el-tabs
    v-model="currTag"
    class="TagsView"
    type="card"
    closable
    @tab-click="handleTabsEdit"
    @tab-remove="handleClose"
  >
    <el-tab-pane
      v-for="item in app.tags"
      :key="item.name"
      :label="item.meta.title"
      :name="item.path"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name: 'tags-view',
  data () {
    return {
      msg: '这是TagsView组件',
      editableTabsValue: '1',
      tags: [],
      currTag: ''
    }
  },
  inject: ['app'],
  created () {
    this.addTags()
    this.currTags()
  },
  watch: {
    $route () {
      this.addTags()
      this.currTags()
    }
  },
  methods: {
    addTags () {
      this.$store.commit('tagsView/addTags', this.$route)
    },
    currTags () {
      const { path } = this.$route
      this.currTag = path
    },
    removeTags () {},
    handleClose (tag) {
      let closeIndex = 0
      this.app.tags.forEach((item, i) => {
        console.log('----', item.path.split('?')[0], tag)
        if (item.path === tag) {
          closeIndex = i
        }
      })
      const obj = {
        fromtags: true,
        path: tag,
        closeIndex
      }
      if (tag === this.currTag && this.app.tags.length > 1) {
        setTimeout(() => {
          if (closeIndex !== 0) {
            this.$router.push(this.app.tags[closeIndex - 1].path)
          } else {
            this.$router.push(this.app.tags[closeIndex].path)
          }
        }, 200)
      }
      this.$store.commit('tagsView/closeTags', obj)
    },
    changeTags (tag) {
      this.$router.push({
        path: tag.path
      })
    },
    handleTabsEdit () {
      const { path } = this.$route
      if (this.currTag !== path) {
        const currfullPath = this.app.tags.filter(item => item.path === this.currTag)[0]
        this.$router.push(currfullPath.fullPath)
      }
    }
  }
}
</script>
<style lang="scss">
.TagsView {
  position: relative;
  z-index: 2;
  width: 100%;
  margin: 0 auto;
  height: 36px;
  padding-top: 4px;
  background: #f5f7fa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  .el-tabs__nav-prev, .el-tabs__nav-next {
    width: 16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  .el-tabs__item {
    height: 36px;
    line-height: 36px;
    color: #909399;
    background: #f5f7fa;
  }

  .is-active {
    background: #fff;
    border-color: #fff !important;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
}
</style>
