<template>
  <textarea class="textarea" :value="value" @input="updateValue($event.target.value)"
    :maxlength="charactersMaxCount"></textarea>
</template>

<script>
export default {
  name: 'MyTextArea',

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
.textarea {
  width: 100%;
  height: 140px;
  padding: 10px 15px;
  border: 1px solid $border-primary;
  border-radius: 10px;
  resize: none;
  font: inherit;
}
</style>