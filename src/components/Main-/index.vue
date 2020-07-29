<template>
  <div class="testPage">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '这是 组件'
    }
  }
}
</script>
<style lang="scss">
.testPage {
  height: inherit;
}
</style>
