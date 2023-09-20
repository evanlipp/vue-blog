<template>
  <div class="comment-item">
    <div class="comment-item_content">
      <p class="comment-item_author">Имя: {{ comment.author }} | Почта: {{ comment.email }}</p>
      <p>{{ comment.body }}</p>
    </div>
    <SvgIcon :iconName="'#close'" @click="deleteComment"></SvgIcon>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
import SvgIcon from '@/components/UI/SvgIcon.vue';

export default {
  components: {
    MyButton,
    SvgIcon
  },

  props: {
    comment: {
      type: Object,
      required: true,
    },
    parentPostId: Number,
  },

  data() {
    return {
      currentCommentData: {
        parentPostId: this.parentPostId,
        commentId: this.comment.id
      }
    }
  },

  methods: {
    deleteComment() {
      const post = Object.assign({}, this.$store.getters.getPostWithId(this.parentPostId))
      const filteredComments = post.comments.filter((comment) => comment.id !== this.comment.id)
      post.comments = filteredComments
      this.$store.commit('saveEditedPost', post)
    }
  }
}
</script>

<style lang="scss">
.comment-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 5px;
  background-color: $bg-item-light;
  border: 1px solid $border-primary;
  border-radius: 10px;
  text-align: left;

  &_content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &_author {
    font-size: 18px;
  }
}
</style>
