<template>
  <div class="main-container-wrapper">
    <div class="section-header">
      <div class="section-title">Sorting Training System</div>
      <div class="section-actions">
        <button class="btn btn-theme" data-modal-trigger="SortStartModal">Start Sorting</button>
      </div>
    </div>
    <div class="main-container-inner">
      <table class="table table-bordered">
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
import {uniqueNamesGenerator, names} from 'unique-names-generator';
import AppSortModal from './../components/StartSortModal'

export default {
  name: 'AppTable',
  data() {
    return {
      peoples: [],
      mailHosts: [
        'gmail.com',
        'yahoo.com',
        'live.com',
        'outlook.com',
      ],
    }
  },
  methods: {
    GeneratesPeoples() {
      let count = 20;
      while (count) {
        const first_name = uniqueNamesGenerator({dictionaries: [names]});
        const last_name = uniqueNamesGenerator({dictionaries: [names]});
        const mailHost = uniqueNamesGenerator({dictionaries: [this.mailHosts]});
        const user_email = first_name + '@' + mailHost;
        const potatoes = Math.floor(Math.random() * 999) + 1;
        this.peoples.push({
          email: user_email,
          potatoes: potatoes,
          first_name: first_name,
          last_name: last_name,
        })
        count--;
      }
    },
    startSortModal() {
      document.getElementById('SortStartModal').classList.toggle('open');
    },
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
