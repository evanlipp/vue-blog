<template>
  <input class="input" :value="value" @input="updateValue($event.target.value)" :maxlength="charactersMaxCount">
</template>

<script>
export default {
  name: 'MyInput',

  props: {
    value: String,
    charactersMaxCount: Number,
  },

  methods: {
    updateValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
.input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid $border-primary;
  border-radius: 10px;
}
</style>