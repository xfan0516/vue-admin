<template>
  <div class="home">
    <h1>{{ msg }}</h1>
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