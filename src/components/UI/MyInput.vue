<template>
<input v-bind:value="value" v-on:input="updateValue($event.target.value)" class="input" type="text">
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    value: String,
  },
  data() {
  return {
 
  }
  },

  methods: {
   updateValue(value) {
    this.$emit('input', value)
   }
  }
}
</script>

<style>
.input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid teal;
  margin-top: 15px;
}
</style>