<template>
  <div class="modals">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Modals',
  data () {
    return {
      msg: '这是 Modals 组件'
    }
  }
}
</script>
<style lang="scss">
.modals {
  height: inherit;
}
</style>