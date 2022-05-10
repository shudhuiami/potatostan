<template>
  <ModalComponent v-show="isAlertModalVisible" @close="closeModal">
    <template v-slot:header>
      <h3 class="modal-title">Alert</h3>
    </template>
    <template v-slot:body>
        <h3>Are you sure ?</h3>
        <p>A training session already in progress.</p>
        <p>If you continue All progress will be lost</p>
    </template>
    <template v-slot:footer>
      <div>
        <button v-on:click="closeModal" class="btn btn-ash">Close</button>
        &nbsp;
        <button v-on:click="resetTraining" class="btn btn-danger">Restart</button>
      </div>
    </template>
  </ModalComponent>
</template>

<script>
import ModalComponent from '../global/Modal.vue';

export default {
  name: 'AppAlertModal',
  data() {
    return {}
  },
  computed: {
    isAlertModalVisible() {
      return this.$store.getters.getAlertModal;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit('setAlertModal', false)
    },
    resetTraining() {
      this.$store.commit('setTimerReset', true)
      this.$store.commit('setTimerStatus', false)
      this.$store.commit('setAlertModal', false)
      this.$store.commit('setStartModal', true)
      this.$store.commit('setPeoples', [])
    }

  },
  mounted(){
  },
  components: {ModalComponent}
}
</script>
