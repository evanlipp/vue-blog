<template>
  <div v-if="posts.length > 0">
    <h3>Post list</h3>
     <TransitionGroup name="post-list">
      <PostItem v-for="post in posts" v-bind:post="post" :key="post.id" @removePost="$emit('removePost', post)"></PostItem>
     </TransitionGroup>
  </div>
  <div v-else>
    <h3>Post list is empty</h3>
  </div>
</template>

<script>
import PostItem from './PostItem.vue';
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
    data() {
        return {};
    },
   
}
</script>

<style>
.post-list-item {
display: inline-block;
margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
transition: all 0.5s ease;

}
.post-list-enter-from,
.post-list-leave-to {
 opacity: 0;
 transform: translateY(30x  );
} 

.post-list-move {
  transition: transform 0.8s ease;
}
</style>