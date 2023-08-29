<template>
  <div class="main-container">
    <div class="aside">
      <h1 class="logo">БЛОГ,</h1>
      <MyButton @click="isVisible = !isVisible">Создать пост</MyButton>
    </div>
    <div class="content">
      <PostList :posts="getPosts" />
    </div>
    <MyDialog :visibility="isVisible" @hideDialog="isVisible = !isVisible">
      <PostForm @create="createPost" />
    </MyDialog>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyDialog from '@/components/UI/MyDialog.vue';
import MyButton from '@/components/UI/MyButton.vue';

export default {
  components: {
    PostForm,
    PostList,
    MyDialog,
    MyButton
  },

  data() {
    return {
      isVisible: false,
    }
  },

  methods: {
    createPost(post) {
      this.$store.commit('addPost', post)
      this.isVisible = false
    },
  },

  computed: {
    getPosts() {
      return this.$store.getters.getPosts
    },
  }
}
</script>

<style lang="scss">
.main-container {
  max-width: 1200px;
  justify-content: center;
  margin: auto;
  display: flex;
  gap: 100px;
}

.aside {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.logo {
  font: $font-logo;
  line-height: 0.7;
  color: $font-color-secondary;
}

.content {
  padding: 20px;
  width: 100%;
  border: 1px solid rgba(0, 128, 128, 0.249);
  border-radius: 10px;
  background-color: $bg-secondary;
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
    0px 105px 63px rgba(0, 0, 0, 0.03),
    0px 47px 47px rgba(0, 0, 0, 0.03),
    0px 12px 26px rgba(0, 0, 0, 0.03),
    0px 0px 0px rgba(0, 0, 0, 0.03);
}
</style>
