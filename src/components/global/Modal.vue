<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal open">
        <div class="modal-dialog">
          <div class="modal-content">
            <header class="modal-header">
              <button @click="close" type="button" class="close" data-dismiss="modal" aria-hidden="true">&#10006;</button>
              <slot name="header" class="modal-title">
                This is the default title!
              </slot>
            </header>
            <section class="modal-body ">
              <slot name="body">
                This is the default body!
              </slot>
            </section>
            <footer class="modal-footer">
              <slot name="footer">
                  <!--This is the default footer!-->
              </slot>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'ModalComponent',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/modal';
</style>