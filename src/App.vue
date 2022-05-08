<template>
  <div id="app">
    <div class="main-container-wrapper">
      <div class="section-header">
        <div class="section-title">Sorting Training System</div>
        <div class="section-actions">
          <button class="btn btn-theme" v-on:click="$store.commit('setStartModal', true)">Start Sorting</button>
        </div>
        <div class="timer-wrapper">
          <AppTimer/>
        </div>
      </div>
      <div class="main-container-inner" v-if="peoples.length > 0">
        <h4 class="text-right">{{ peoples.length }} people in the list</h4>
        <AppTable/>
      </div>
      <div class="main-container-inner flex-inner" v-if="peoples.length === 0">
        <h2>Peoples list is empty</h2>
      </div>

    </div>
    <AppSortModal/>
  </div>
</template>

<script>

import AppTable from './components/AppTable';
import AppSortModal from './components/StartSortModal'
import AppTimer from './components/Timer'

export default {
  name: 'App',
  data() {
    return {
    };
  },
  computed: {
    peoples() {
      return this.$store.getters.getPeoples;
    },

  },
  methods: {
  },
  mounted() {
  },
  components: {AppTable, AppSortModal, AppTimer}
}
</script>

<style lang="scss">
@import './assets/scss/main';
</style>
