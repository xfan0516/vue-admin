<template>
  <div class="home">
    <h4 v-for="item in 40" :key="item">{{ msg + item }}</h4>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '这是 home 组件'
    }
  }
}
</script>
<style lang="scss">
.home {
  height: inherit;
}
</style>