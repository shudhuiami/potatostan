<template>
  <div class="main-container-wrapper">
    <div class="section-header">
      <div class="section-title">Sorting Training System</div>
      <div class="section-actions">
        <button class="btn btn-theme" data-modal-trigger="SortStartModal">Start Sorting</button>
      </div>
    </div>
    <div class="main-container-inner">
      <table class="table table-bordered" v-if="peoples.length > 0">
        <thead>
        <tr>
          <th>Email</th>
          <th>Potatoes</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        </thead>
        <draggable v-model="peoples" tag="tbody">
          <tr v-for="(people, index) in peoples" :key="(index+1)">
            <td>{{ people.email }}</td>
            <td><strong>{{ people.potatoes }}</strong></td>
            <td>{{ people.first_name }}</td>
            <td>{{ people.last_name }}</td>
          </tr>
        </draggable>
      </table>
    </div>
    <AppSortModal/>
  </div>
</template>

<script>

import draggable from 'vuedraggable';
import AppSortModal from './../components/StartSortModal'

export default {
  name: 'AppTable',
  data() {
    return {
      mailHosts: [
        'gmail.com',
        'yahoo.com',
        'live.com',
        'outlook.com',
      ],
    }
  },
  computed: {
    Hosts() {
      return this.$store.getters.HostsList;
    },
    peoples() {
      return this.$store.getters.getPeoples;
    },

  },
  methods: {
    GlobalModalOpen() {
      const triggers = Array.from(document.querySelectorAll('[data-modal-trigger]'))
      while (triggers.length){
        const item = triggers.pop();
        const target = item.getAttribute('data-modal-trigger');
        item.onclick = () => {document.getElementById(target).classList.toggle('open');};
      }
    },
    GlobalModalClose() {
      let triggers = Array.from(document.querySelectorAll('[data-toggle="modal-close"]'))
      while (triggers.length){
        let item = triggers.pop();
        item.onclick = () => {item.closest('.modal').classList.toggle('open')};
      }
    }

  },
  created() {

  },
  mounted() {
    this.GlobalModalOpen()
    this.GlobalModalClose()
  },
  components: {draggable, AppSortModal}
}
</script>

<style lang="scss">
@import './../assets/scss/table';
</style>
