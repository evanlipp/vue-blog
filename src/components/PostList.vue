<template>
  <div class="post-list">
    <div class="post-list_wrapper" v-if="posts.length > 0">
      <TransitionGroup class="post-list_items" name="post-list">
        <PostItem v-for="post in posts" :key="post.id" :post="post" />
      </TransitionGroup>
    </div>
    <div v-else>
      <h3 class="post-list_subtitle">Создайте свой первый пост</h3>
    </div>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

export default {
  components: {
    PostItem,
  },

  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="scss">
.post-list {
  &_wrapper {
    display: flex;
  }

  &_items {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30x);
}

.post-list-move {
  transition: transform 0.8s ease;
}
</style>