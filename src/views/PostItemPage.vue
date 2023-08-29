<template>
  <div class="main-container">
    <div class="content">
      <div class="post-item_content" v-if="getPostWithId">
        <h3 class="post-item_title">{{ getPostWithId.title }}</h3>
        <p class="post-item_description">{{ getPostWithId.description }}</p>
        <p>{{ getPostWithId.body }}</p>
        <p> {{ formatedDate }}</p>
        <hr>
        <MyButton @click="isVisible = !isVisible">Редактировать запись</MyButton>
        <MyDialog :visibility="isVisible" @hideDialog="isVisible = !isVisible">
          <EditorForm :post="getPostWithId" @saveEditedPost="saveEditedPost" />
        </MyDialog>
        <div class="comment-form">
          <div class="comment-form_author">
            <MyInput v-model="comment.author" type="text" placeholder="Имя" :charactersMaxCount="50" />
            <MyInput v-model="comment.email" type="email" placeholder="Почта" :charactersMaxCount="50" />
          </div>
          <MyTextArea v-model="comment.body" placeholder="Комментарий" :charactersMaxCount="500" />
          <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
          <MyButton @click="saveComment">Оставить комментарий</MyButton>
        </div>
        <CommentsList :comments="getPostWithId.comments" :parentPostId="getPostWithId.id" />
      </div>
    </div>
  </div>
</template>

<script>
import CommentsList from '@/components/CommentsList.vue'
import EditorForm from '@/components/EditorForm.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MyDialog from '@/components/UI/MyDialog.vue'
import MyInput from '@/components/UI/MyInput.vue'
import MyTextArea from '@/components/UI/MyTextArea.vue'

export default {
  components: {
    MyDialog,
    MyButton,
    EditorForm,
    CommentsList,
    MyInput,
    MyTextArea
  },

  data() {
    return {
      isVisible: false,
      errorMessage: '',
      comment: {
        author: '',
        email: '',
        body: ''
      }
    }
  },

  methods: {
    saveEditedPost(editedPost) {
      this.$store.commit('saveEditedPost', editedPost)
      this.isVisible = false
    },

    saveComment() {
      const regexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      if (this.comment.author === '') {
        this.errorMessage = 'Введите ваше имя'
      } else if (this.comment.body === '') {
        this.errorMessage = 'Введите текст коментария'
      } else if (!regexp.test(this.comment.email)) {
        this.errorMessage = 'Некорректный email'
      } else {
        const post = Object.assign({}, this.getPostWithId)
        this.comment.id = Date.now()
        post.comments.push(this.comment)
        this.$store.commit('saveEditedPost', post)
        this.comment = {
          author: '',
          email: '',
          body: ''
        }
        this.errorMessage = ''
      }
    }
  },

  computed: {
    formatedDate() {
      return this.$store.getters.getFormatedDate(this.getPostWithId.createdDate)
    },

    getPostWithId() {
      return this.$store.getters.getPostWithId(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss">
.comment-form {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &_author {
    display: flex;
    gap: 30px;
  }
}
</style>