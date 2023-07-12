<template>
  <form @submit.prevent>
    <h4>create post</h4>
    <my-input v-model="post.title"  type="text" placeholder="post name"/>
    <MyInput v-model="post.body"  type="text" placeholder="post description"/>
 
   
  <MyButton  @click="createPost">create</MyButton>
  
  </form>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';

export default {
  components: {
    MyButton,
    MyInput,
  },
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },

  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style>


form {
  display: flex;
  flex-direction: column;
}


</style>