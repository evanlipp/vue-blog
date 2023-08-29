<template>
  <div class="form">
    <MyInput v-model="post.title" type="text" placeholder="Название поста" :charactersMaxCount="40" />
    <MyInput v-model="post.description" type="text" placeholder="Описание поста" :charactersMaxCount="150" />
    <MyTextArea v-model="post.body" placeholder="Содержание поста" />
    <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
    <MyButton @click="createPost">Создать пост</MyButton>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
import MyInput from '@/components/UI/MyInput.vue';
import MyTextArea from '@/components/UI/MyTextArea.vue';

export default {
  components: {
    MyButton,
    MyInput,
    MyTextArea
  },

  data() {
    return {
      post: {
        id: '',
        title: '',
        description: '',
        body: '',
        createdDate: '',
        comments: [],
      },
      errorMessage: ''
    }
  },

  methods: {
    createPost() {
      const currentDate = Date.now()
      const dateOfCreate = new Date(currentDate)

      if (this.post.title === '') {
        this.errorMessage = 'Введите название'
      } else if (this.post.description === '') {
        this.errorMessage = 'Введите краткое описание'
      } else {
        this.post.id = currentDate
        this.post.createdDate = dateOfCreate.toISOString().slice(0, 10)
        this.$emit('create', this.post)
        this.post = {
          title: '',
          description: '',
          body: '',
        }
      }
    }
  }
}
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 500px;
}
</style>