<template>
  <div class="v-main">
    <transition name="fade-transform" mode="out-in">
      <router-view v-if="!app.reLoadCom" />
    </transition>
  </div>
</template>
<script>

export default {
  name: 'v-main',
  inject: ['app'],
  data () {
    return {
      msg: '这是main组件'
    }
  }
}
</script>
<style lang="scss">
.v-main {
  position: relative;
  box-sizing: border-box;
  height: calc(100vh - 60px);
  padding: 40px 0 10px;
  overflow-x: hidden;
  overflow-y: auto;

  & > div {
    height: 100%;
    overflow: hidden;
  }

  & > .v-form-page {
    overflow-y: auto;
  }

  .page {
    position: absolute;
    bottom: 0;
    z-index: 10;
    width: 100%;

    & > div {
      margin: 10px 0 !important;
    }
  }
}
</style>
