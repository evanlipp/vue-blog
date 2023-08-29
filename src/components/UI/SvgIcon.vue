<template>
  <div class="icon-wrapper" @click="click">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg">
      <use :xlink:href='iconName' />
    </svg>
  </div>
</template>

<script>
import "@/assets/icons/close.svg";

export default {
  name: 'SvgIcon',

  props: {
    iconName: String,
  },

  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style  lang="scss">
.icon {
  width: 24px;
  height: 24px;
  color: gray;

  &:hover {
    color: red;
    transform: rotate(90deg);
    transition: 0.5s;
  }
}
</style>