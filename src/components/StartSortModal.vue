<template>
  <div id="SortStartModal" class="modal fade text-center">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Заголовок модального окна -->
        <div class="modal-header">
          <button type="button" data-toggle="modal-close" class="close" data-dismiss="modal" aria-hidden="true">&#10006;</button>
          <h2 class="modal-title">How many people?</h2>
        </div>
        <!-- Основное содержимое модального окна -->
        <div class="modal-body">
            <div class="form-group">
              <p>Enter a number of how many people you want to add to the list.</p>
              <input v-model="count" type="text" class="form-control" placeholder="Enter the number of people">
            </div>
        </div>
        <div class="modal-footer">
          <button data-toggle="modal-close" class="btn btn-ash">Cancel</button>
          &nbsp;
          <button v-on:click="StartSort" class="btn btn-theme">Start</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppSortModal',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    StartSort() {
      this.$store.dispatch('generatesPeoples', this.count)
      document.getElementById('SortStartModal').classList.toggle('open')
    }
  },
  mounted(){

  },
  components: {}
}
</script>

<style lang="scss">
@import './../assets/scss/modal';
</style>
