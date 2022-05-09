<template>
  <span v-text="formatTime(timerCount)"></span>
</template>

<script>

export default {
  name: 'AppTimer',
  data() {
    return {
      timerCount: 0,
      timer: '00:00',
      timerInterval: null

    };
  },
  computed: {
    getTimerStart() {
      return this.$store.getters.getTimerStart;
    },
    getTimerStop() {
      return this.$store.getters.getTimerStop;
    },
    getTimerReset() {
      return this.$store.getters.getTimerReset;
    },

  },
  watch: {
    getTimerStart(newValue) {
        if(newValue === true){
          this.initTimer();
          this.$store.commit('setTimerStatus', true)
          this.$store.commit('setTimerStart', false)
        }
    },
    getTimerStop(newValue) {
        if(newValue === true){
          if(this.timerInterval !== null){
            clearInterval(this.timerInterval);
            this.timerInterval = null;
          }
          this.$store.commit('setTimerStatus', false)
          this.$store.commit('setTimerStop', false)
        }
    },
    getTimerReset(newValue) {
      if(newValue === true){
        if(this.timerInterval !== null){
          clearInterval(this.timerInterval);
          this.timerInterval = null;
        }
        this.timerCount = 0;
        this.timer = '00:00';
        this.$store.commit('setTimerSec', 0)
      }
    },
    timerCount(newValue) {
      this.$store.commit('setTimerSec', newValue)
    },
  },
  methods: {
    pad(val) {
      return val > 9 ? val : "0" + val;
    },
    initTimer() {
      if(this.timerInterval !== null){
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      this.timer = '00:00';
      this.timerCount = 0;
      this.timerInterval = setInterval(() => {
        ++this.timerCount
      },1000)
    },
    formatTime(totalSeconds) {
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;
      minutes = String(minutes).padStart(2, "0");
      hours = String(hours).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");
      return hours + " : " + minutes + " : " + seconds;
    }
  },
  mounted() {},
  components: {}
}
</script>

