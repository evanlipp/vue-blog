<template>
  
      <select v-model="value" @change="changeOption($event.target.value)">
        <option disabled value="">Sort posts:</option>
        <option v-for="option in options" :key="option.value" v-bind:value="option.value" >{{ option.name }} </option>
      </select>

</template>




<script>
export default {
  name: 'MySelect',

  props: {

    options: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
    value: '',
    }
  },

  

  methods: {
    changeOption(value) {
      this.$emit('selectedOption', value)
    },


  }
}
</script>

<style></style>