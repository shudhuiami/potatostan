<template>
  <div class="main-container-wrapper">
    <div class="section-header">
      <div class="section-title">Sorting Training System</div>
      <div class="section-actions">
        <button class="btn btn-theme">Start Sorting</button>
      </div>
    </div>
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
</template>

<script>

import draggable from 'vuedraggable';
import {uniqueNamesGenerator, names} from 'unique-names-generator';

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
    }
  },
  created() {
    this.GeneratesPeoples()
  },
  components: {draggable}
}
</script>

<style lang="scss">
@import './../assets/scss/table';
</style>
