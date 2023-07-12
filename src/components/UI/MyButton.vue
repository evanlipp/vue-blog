<template>
 
  <button @click="click" class="btn">
    <slot></slot>
  </button>

</template>

<script>
export default {
  name: 'MyButton',

  methods: {
    click() {
      this.$emit('click')
  
    }
  }
}

</script>

<style>
.btn {
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}  
</style>