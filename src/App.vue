<template>
  <router-view v-slot="{ Component }">
    <Component :is="Component" />
  </router-view>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

