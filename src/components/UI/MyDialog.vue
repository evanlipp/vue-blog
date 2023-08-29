<template>
  <div class="dialog" v-if="visibility" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDialog',

  props: {
    visibility: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    hideDialog() {
      this.$emit('hideDialog')
    }
  }
}
</script>

<style lang="scss">
.dialog {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
}
</style>
