<template>
  <div class="Sidebar v-menu" :style="{width: !app.isCollapse ? '' : '64px'}">
    <div class="vel-menu">
      <el-menu
        :default-active="currActive"
        :default-openeds="openeds"
        class="el-menu-vertical-demo"
        :collapse="app.isCollapse"
        background-color="#fff"
        text-color="#333"
        active-text-color="#409af4"
        @open="handleOpen"
        @close="handleClose"
      >
        <sub-menu
          v-for="(item) in menus"
          :key="item.id"
          :item="item"
          :level="0"
        />
      </el-menu>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import SubMenu from './SubMenu.vue'
const menus = {
  login: [
    {
      'icon': 'el-icon-s-home',
      'id': '001',
      'name': '首页',
      'url': '/admin/home',
    },
    {
      'url': '/UI',
      'icon': 'el-icon-s-tools',
      'id': '521',
      'name': 'UI',
      'children': [
        {
          'icon': '',
          'id': '522',
          'name': '按钮',
          'url': '/admin/ui/button',
        }
        
      ]
    },
    {
      'url': '/form',
      'icon': 'el-icon-s-custom',
      'id': '311',
      'name': '表单',
      'children': [
       
      ]
    }
    
  ]
}
console.log()
export default {
  name: 'sidebar',
  data () {
    return {
      msg: '这是Sidebar组件',
      menus: [],
      currActive: '522',
      openeds: []
    }
  },
  created () {
    this.menus = menus['login'] // loginType : loginSite login
    this.currActive = this.$sStorage.get('currActive') ? this.$sStorage.get('currActive') : ''
  },
  watch: {
    $route (newV) {
      this.findCurrMenu(this.menus, newV)
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      this.openeds.push(key)
      console.log('handleOpen', key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log('handleClose', key, keyPath)
    },
    findCurrMenu (arrs, obj) {
      arrs.forEach((items) => {
        if (items.children && items.children.length) {
          this.findCurrMenu(items.children, obj)
        } else {
          if (items.url === obj.path || items.url === obj.meta.parent) {
            this.currActive = items.id
            this.$sStorage.set('currActive', items.id)
          }
        }
      })
    }
  },
  computed: {
    ...mapState({
      isCollapse: state => state.menuSwitch.isCollapse
    })
  },
  components: {
    SubMenu
  },
  inject: ['main', 'app']
}
</script>
<style lang="scss">
.Sidebar {
  position: relative;
  z-index: 210;
  box-sizing: border-box;
  float: left;
  width: 220px;
  height: 100vh;
  padding-bottom: 50px;
  overflow: hidden;
  color: #666;
  text-align: left;
  background: #fff;
  border-right: 1px solid #ddd;
  transition: width .5s;

  .el-menu-item.is-active {
    color: $color-primary !important;
  }

  .el-menu-vertical-demo {
    border-right: 0;

  }

  .vel-menu {
    box-sizing: border-box;
    height: 100%;
    padding-bottom: 50px;
    overflow: hidden;
  }

  & > .el-menu {
    box-sizing: border-box;
    width: 220px;
    height: 100%;
    padding-bottom: 50px;

    & > .el-menu-item {
      font-weight: 600;
    }
  }

  .el-submenu .el-menu-item {
    height: 40px;
    line-height: 40px;
  }

  .el-submenu__title {
    // width: 220px;
    font-weight: 600;
  }

  .logo {
    height: 50px;
    line-height: 50px;
    color: #ccc;
    text-align: center;
    background: rgba(0, 0, 0, 0.1);

    img {
      width: 60%;
    }
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: 400px;
  }
}
</style>
