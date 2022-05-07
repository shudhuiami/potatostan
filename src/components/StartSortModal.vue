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
              <input type="text" class="form-control" placeholder="">
            </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ash">Cancel</button>
          &nbsp;
          <button class="btn btn-theme">Start</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppSortModal',
  data() {
    return {}
  },
  methods: {

  },
  mounted(){

  },
  components: {}
}
</script>

<style lang="scss">
@import './../assets/scss/modal';
</style>
