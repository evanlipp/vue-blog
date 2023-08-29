<template>
  <div class="app">
      <RouterView/>
  </div>
</template>

<script>
export default {
  watch: {
    '$store.state.posts': function () {
      const posts = this.$store.getters.getPosts
      localStorage.setItem('posts', JSON.stringify(posts))
    }
  },

  mounted() {
    const posts = JSON.parse(localStorage.getItem('posts'))
    this.$store.commit('setPosts', posts)
  },
}
</script>