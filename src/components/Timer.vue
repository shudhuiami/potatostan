<template>
  <span v-text="timer"></span>
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
    getTimerStatus() {
      return this.$store.getters.getTimerStatus;
    },
  },
  watch: {
    getTimerStatus(newValue) {
        if(newValue === true){
          this.initTimer();
        }else{
          clearInterval(this.timerInterval);
          this.timerInterval = null;
          this.timer = '00:00';
          this.timerCount = 0;
        }
    },
    timerCount(newValue) {
      this.$store.commit('setTimerSec', newValue)
    }

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
        this.timer = this.pad(parseInt(this.timerCount/60,10))+':'+this.pad(++this.timerCount%60)
      },1000)
    }
  },
  mounted() {},
  components: {}
}
</script>

