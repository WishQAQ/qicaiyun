<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
  @import "../static/style/base.css";
#app {
  height: 100vh;
}
</style>
