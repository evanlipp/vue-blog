<template>
  <div class="post-item">
    <div class="post-item_content">
      <h3 class="post-item_title">{{ post.title }}</h3>
      <p class="post-item_description">{{ post.description }}</p>
      <div class="post-item_info">
        <p>{{ formatedDate }}</p>
        <p class="post-item_comments-count">Количeство комментариев: {{ post.comments.length }}</p>
      </div>
    </div>
    <div class="post-item_buttons">
      <MyButton @click="$router.push(`/${post.id}`)">Открыть</MyButton>
      <MyButton @click="deletePost">Удалить</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';

export default {
  components: {
    MyButton
  },

  props: {
    post: {
      type: Object,
      required: true,
    }
  },

  computed: {
    formatedDate() {
      return this.$store.getters.getFormatedDate(this.post.createdDate)
    }
  },

  methods: {
    deletePost() {
      this.$store.commit('deletePost', this.post)
    }
  }
}
</script>

<style lang="scss">
.post-item {
  padding: 15px;
  border: 2px solid $border-primary;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  background-color: $bg-item-light;

  &_content {
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &_title {
    font-size: 32px;
  }

  &_description {
    font-size: 16px;
  }

  &_info {
    font-size: 12px;
  }

  &_buttons {
    width: 15%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
  }
}
</style>