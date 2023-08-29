<template>
  <div class="form">
    <MyInput v-model="editedPost.title" type="text" placeholder="Название поста" />
    <MyInput v-model="editedPost.description" type="text" placeholder="Описание поста" />
    <MyTextArea v-model="editedPost.body" placeholder="Содержание поста" />
    <MyButton @click="$emit('saveEditedPost', editedPost)">Сохранить</MyButton>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
import MyInput from '@//components/UI/MyInput.vue';
import MyTextArea from '@/components/UI/MyTextArea.vue';

export default {
  components: {
    MyButton,
    MyInput,
    MyTextArea
  },

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      editedPost: {
        id: this.post.id,
        title: this.post.title,
        description: this.post.description,
        body: this.post.body,
      }
    }
  }
}
</script>