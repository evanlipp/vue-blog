<template>
  <div class="post" >
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Post name:</strong> {{ post.title }}</div>
      <div><strong>Post description:</strong> {{ post.body }}</div>
    </div>
      <div class="post-btns">
        <MyButton @click="$emit('removePost', post)">Delete</MyButton>
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

  methods: {
  }
}
</script>

<style>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>