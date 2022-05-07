<template>
  <div id="app">
    <AppTable/>
  </div>
</template>

<script>

import AppTable from './components/AppTable';

export default {
  name: 'App',
  components: {AppTable}
}
</script>

<style lang="scss">
@import './assets/scss/main';
</style>
