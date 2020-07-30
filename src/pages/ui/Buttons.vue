<template>
  <div class="buttons">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'buttons',
  data () {
    return {
      msg: '这是 component 组件'
    }
  }
}
</script>
<style lang="scss">
.buttons {
  height: inherit;
}
</style>