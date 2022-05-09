<template>
  <table class="table table-bordered">
    <thead>
    <tr>
      <th>Email</th>
      <th>Potatoes</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
    </thead>
    <draggable :options="{disabled : timerStatus === false && peoples.length > 0}" v-model="peoples" tag="tbody" @end="GetSortStatus">
      <tr class="unselectable" v-for="(people, index) in peoples" :key="(index+1)"  :class="{'active':people.active === true}">
        <td>
          <div class="email-wrapper">
            <label :for="'Email'+index" class="container-checkbox">
              <span class="text">
                {{ people.email }}
              </span>
              <input type="checkbox" :id="'Email'+index" @change="SelectUser(people)">
              <span class="checkmark"></span>
            </label>
            <div class="arrow">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L6 6L1 1" stroke="#999999" stroke-width="2"/>
              </svg>
            </div>
          </div>
        </td>
        <td>{{ people.potatoes }}</td>
        <td>{{ people.first_name }}</td>
        <td>{{ people.last_name }}</td>
      </tr>
    </draggable>
  </table>
</template>

<script>

import draggable from 'vuedraggable';

export default {
  name: 'AppTable',
  data() {
    return {}
  },
  computed: {
    peoples: {
      get () {
        return this.$store.getters.getPeoples;
      },
      set (value) {
        this.$store.commit('setPeoples', value)
      }
    },
    timerStatus() {
      return this.$store.getters.getTimerStatus;
    }
  },
  methods: {
    CheckListSort(arr, n) {
      if (n === 1 || n === 0){return 1;}
      if (arr[n - 1].potatoes > arr[n - 2].potatoes){return 0;}
      return this.CheckListSort(arr, n - 1);
    },
    GetSortStatus(){
      if (this.CheckListSort(this.peoples, this.peoples.length) !== 0){
        this.$store.dispatch('SortCompleted', true);
      }
    },
    SelectUser(people){
      people.active = people.active !== true;
    }
  },
  created() {

  },
  mounted() {

  },
  components: {draggable}
}
</script>

<style lang="scss">
@import './../assets/scss/table';
</style>
