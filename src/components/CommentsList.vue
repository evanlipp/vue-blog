<template>
  <div class="comment-list">
    <div class="comment-list_items" v-if="comments.length > 0">
      <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment" :parentPostId="parentPostId" />
    </div>
    <div v-else>
      <p class="comment-list_subtitle">Нет ни одного комментария</p>
    </div>
  </div>
</template>

<script>
import CommentItem from '@/components/CommentItem.vue';

export default {
  components: {
    CommentItem,
  },

  props: {
    comments: {
      type: Array,
      required: true,
    },
    parentPostId: Number,
  },
}
</script>

<style lang="scss">
.comment-list {
  text-align: center;

  &_items {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>