<template>
  <div id="app">
  <!--Main Container-->
    <div class="main-container-wrapper">
      <div class="section-header">
        <div class="section-title">
          <span class="gd-text">Sorting Training System</span>
        </div>
        <div class="section-actions">
          <button class="btn btn-theme" v-on:click="startTraining">Start Sorting</button>
        </div>
        <div class="timer-wrapper">
          <AppTimer/>
        </div>
      </div>
      <div class="main-container-inner" v-if="peoples.length > 0">
        <div class="header-wrapper">
          <h4 class="text-right">{{ peoples.length }} people in the list</h4>
        </div>
        <!--Sortable table-->
        <AppTable/>
        <!--Sortable table-->
      </div>
      <!--Empty List-->
      <div class="main-container-inner flex-inner" v-if="peoples.length === 0">
        <h2 class="gd-text-2">Peoples list is empty</h2>
      </div>
      <!--Empty List-->
    </div>
    <!--Start popup-->
    <AppSortModal/>
    <!--Result popup-->
    <AppResultModal/>
    <!--Alert popup-->
    <AppAlertModal/>
  </div>
</template>

<script>

import AppTable from './components/AppTable';
import AppSortModal from './components/modals/StartSortModal'
import AppResultModal from './components/modals/ResultModal'
import AppAlertModal from './components/modals/AlertModal'
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
    timerStatus() {
      return this.$store.getters.getTimerStatus;
    },
  },
  methods: {
    //Start training session
    startTraining() {
      if(this.timerStatus === false){
        this.$store.commit('setStartModal', true)
      }else{
        this.$store.commit('setAlertModal', true)
      }
    }
  },
  components: {AppTable, AppSortModal, AppResultModal, AppAlertModal, AppTimer}
}
</script>

<style lang="scss">
@import './assets/scss/main';
</style>
