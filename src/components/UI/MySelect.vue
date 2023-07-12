<template>
  <select v-bind:value="value" @change="changedSelectedSortOption">
    <option disabled value="">Sort posts:</option>
    <option v-for="option in options" :key="option.value" v-bind:value="option.value">{{ option.name }} </option>
  </select>
</template>




<script>
export default {
  name: 'MySelect',

  props: {
    value: String,
    options: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {

    }
  },



  methods: {
  changedSelectedSortOption(event) {
      this.$emit('updateSelectedSortOption', event.target.value)
    }

  }
}
</script>

<style></style>