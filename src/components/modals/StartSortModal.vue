<template>
  <ModalComponent v-show="isSortModalVisible" @close="closeModal">
    <template v-slot:header>
      <h3 class="modal-title">How many people?</h3>
    </template>
    <template v-slot:body>
      <form @submit.prevent="StartSort">
        <div class="form-group">
          <p>Enter a number of how many people you want to add to the list.</p>
          <input @keyup="valueValidate" v-model="count" type="text" class="form-control" placeholder="Enter the number of people">
          <small class="helper-text text-danger" v-if="countValidation">Value is required and should be between 20 and 100</small>
        </div>
      </form>
    </template>
    <template v-slot:footer>
      <div>
        <button v-on:click="closeModal" class="btn btn-ash">Cancel</button>
        &nbsp;
        <button v-on:click="StartSort" class="btn btn-theme">Start</button>
      </div>
    </template>
  </ModalComponent>
</template>

<script>
import ModalComponent from '../global/Modal.vue';

export default {
  name: 'AppSortModal',
  data() {
    return {
      count: '',
      countValidation: false,
    }
  },
  computed: {
    isSortModalVisible() {
      return this.$store.getters.getStartModal;
    },

  },
  methods: {
    closeModal() {
      this.count = '';
      this.countValidation = false;
      this.$store.commit('setStartModal', false)
    },
    StartSort() {
      this.valueValidate();
      if(this.countValidation === false){
        this.$store.dispatch('generatesPeoples', this.count)
        this.$store.commit('setTimerStart', true)
        this.closeModal()
      }
    },
    valueValidate() {
      const pattern=/^[2-9][0-9]?$|^100$/
      this.countValidation = !pattern.test(this.count);!pattern.test(this.count)
    },
  },
  mounted(){
  },
  components: {ModalComponent}
}
</script>
