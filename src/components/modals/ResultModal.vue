<template>
  <ModalComponent v-show="isResultModalVisible" @close="closeModal">
    <template v-slot:header>
      <h3 class="modal-title">Result</h3>
    </template>
    <template v-slot:body>
        <table>
          <tr>
            <td>Total number of peoples:</td>
            <td>{{ PeoplesCount }}</td>
          </tr>
          <tr>
            <td>Time used:</td>
            <td>{{formatTime(TimeCount)}}</td>
          </tr>
          <tr>
            <td>Average:</td>
            <td>{{ parseFloat(PeoplesCount/TimeCount).toFixed(2) }}/s</td>
          </tr>

        </table>
    </template>
    <template v-slot:footer>
      <div>
        <button v-on:click="closeModal" class="btn btn-ash">Close</button>
      </div>
    </template>
  </ModalComponent>
</template>

<script>
import ModalComponent from '../global/Modal.vue';

export default {
  name: 'AppResultModal',
  data() {
    return {}
  },
  computed: {
    isResultModalVisible() {
      return this.$store.getters.getResultModal;
    },
    TimeCount() {
      return this.$store.getters.getTimerSec;
    },
    PeoplesCount() {
      return this.$store.getters.getPeoplesLength;
    },


  },
  methods: {
    closeModal() {
      this.$store.commit('setResultModal', false)
    },
    formatTime(totalSeconds) {
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;
      minutes = String(minutes).padStart(2, "0");
      hours = String(hours).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");
      return hours + ":" + minutes + ":" + seconds;
    }
  },
  mounted(){
  },
  components: {ModalComponent}
}
</script>
