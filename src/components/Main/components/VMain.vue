<template>
  <div class="v-main">
    <transition name="fade-transform" mode="out-in">
      <router-view />
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
  height: calc(100vh - 100px);
  padding: 0 0 10px;
  overflow-x: hidden;
  overflow-y: auto;

  & > div {
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 10px;
      height: 1px;
    }

    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-track {
      background: #eee;
      border-radius: 10px;
      box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.1);
    }
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
