<template>
  <button @click="click" class="button">
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

<style lang="scss">
.button {
  padding: 10px 15px;
  border: 1px solid $border-primary;
  border-radius: 10px;
  background-color: $bg-secondary;

  &:hover {
    background-color: $bg-button-hover;
  }

  &:active {
    background-color: $bg-button-active;
  }
}
</style>