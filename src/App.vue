<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      isCollapse: false,
      onReLoad: true
    }
  },
  created () {
    console.log(this.$store)
  },
  methods: {
    menuSwitch () {
      this.isCollapse = !this.isCollapse
    },
    reLoad () {
      this.onReLoad = false
      setTimeout(() => {
          this.onReLoad = true
      }, 10)
      // this.$nextTick(() => {
      // })
    }
  },
  provide () {
    return {
      app: this
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tagsView.tags
    })
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.box-card {
  text-align: left;
  margin-bottom: 10px;

  .el-button-group {
    margin-right: 20px;
  }
}

</style>
