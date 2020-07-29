<template>
  <div class="VHeader">
    <div class="VHeader-l">
      <div class="logo">VUE-ADMIN</div>
      <div class="btn-isCollapse" @click="app.menuSwitch">
        <i :class="'el-icon-s-' + (app.isCollapse ? 'unfold' : 'fold')" />
      </div>
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item hover-effect">
        <span class="el-dropdown-link">
          <!-- <el-avatar size="small" :src="user.photoUrl" /> -->
          <span class="username">
            {{ user.mySite ? user.mySite.siteName : user.name || user.companyName }}
          </span>
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item>黄金糕</el-dropdown-item> -->
          <!-- <router-link to="/userInfo">
            <el-dropdown-item>个人信息</el-dropdown-item>
          </router-link> -->
          <router-link to="/changePwd">
            <el-dropdown-item>修改密码</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <!-- <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/profile/index">
            <el-dropdown-item>个人中心</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'v-header',
  data () {
    return {
      msg: '这是VHeader组件',
      user: {}
    }
  },
  created () {
    this.user = this.$lStorage.get('user') || {}
  },
  methods: {
   
    logout () {
      this.$api.slogout({}).then(() => {
        this.main.Message('退出登录')
      })
      this.$api.alogout({}).then(() => {
        this.main.Message('退出登录')
      })
      this.$lStorage.clear('token')
      this.$sStorage.clear('currActive')
      this.$router.push(`/login`)
      this.$nextTick(() => {
        location.reload()
      })
    }
  },
  inject: ['main', 'app']
}
</script>
<style lang="scss">
.VHeader {
  height: 60px;
  color: #fff;
  background: $color-primary;
  background-size: 100% 100%;

  .VHeader-l {
    display: flex;
    float: left;
    padding: 10px;
    line-height: 40px;
    color: #fff;
  }

  .logo {
    width: 200px;
    height: 40px;
    line-height: 40px;
    background: $color-f;
    color: $color-primary;
  }

  .btn-isCollapse {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    line-height: 40px;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.081);
    }
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .el-icon-arrow-down {
      color: #fff;
      vertical-align: middle;
    }

    .right-menu-item {
      display: inline-block;
      height: 100%;
      padding: 0 8px;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      span {
        vertical-align: middle;
      }

      .username {
        padding-left: 10px;
        font-size: 14px;
        color: #fff;
      }

      .avatar-wrapper {
        position: relative;
        margin-top: 5px;

        .user-avatar {
          width: 40px;
          height: 40px;
          cursor: pointer;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          position: absolute;
          top: 25px;
          right: -20px;
          font-size: 12px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
