<template>
  <div id="app" class="app">
    <h1>Post page</h1>
    <MyInput
      v-model="searchQuery"
      placeholder="search post">


    </MyInput>
    <div class="app__buttons">
      <MyButton
        class="btn"
        @click="isVisible = !isVisible">
        create post
      </MyButton>
      <div>
        <MySelect
        
          class="select"
          v-model="selectedSort"
          @selectedOption="selectedOption"
          v-bind:options="options">
        </MySelect>
        <MyButton @click="clearSort"> clear</MyButton>
      </div>
    </div>
    <MyDialog
      v-bind:visibility="isVisible"
      @hideDialog="isVisible = !isVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <Postlist
      v-bind:posts="sortedAndSearchedPosts"
      @removePost="removePost"
      v-if="!isPostLoading">
    </Postlist>
    <div v-else>Loading...</div>
    <div class="page__wrapper">
      <div 
      @click="changePage(pageNumber)"
      class="page" 
      :class="{
        'current_page': page === pageNumber
      }"
      v-for="pageNumber in totalPages" :key="pageNumber"> 
      {{ pageNumber }}
    </div>
    </div>
  </div>
</template>

<script>
import MyButton from './components/UI/MyButton.vue';
import MyDialog from './components/UI/MyDialog.vue';
import PostForm from './components/PostForm.vue';
import Postlist from './components/PostList.vue';
import axios from 'axios';
import MySelect from './components/UI/MySelect.vue';
import MyInput from './components/UI/MyInput.vue'
export default {
  components: {
    PostForm,
    Postlist,
    MyDialog,
    MyButton,
    MySelect,
    MyInput,
  },


  data() {
    return {
      posts: [],
      isVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      options: [
        { value: 'title', name: 'by name' },
        { value: 'body', name: 'by body' },
        { value: 'head', name: 'by id' },
      ]

    }
  },



  methods: {
    createPost(post) {
      this.posts.push(post)
      this.isVisible = false
    },

    removePost(post) {
      this.posts = this.posts.filter((postItem) => postItem.id !== post.id)
    },

    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data
      } catch (error) {
        alert(error)
      } finally {
        this.isPostLoading = false
      }
    },

    selectedOption(value) {
      this.selectedSort = value
    },

    changePage(pageNumber) {
      this.page =  pageNumber
    },

    clearSort() {
     this.selectedSort = ''
     
    },

   

  
  },

  mounted() {
    this.fetchPosts()
  },


  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) => post.title.toLowerCase().includes(this.searchQuery.toLocaleLowerCase()))
    }
  },

  // watch: {
  //   selectedSort() {
  //       this.posts.sort((post1, post2) => {
  //          return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
  //       })
  //     }
  // }
    watch: {
      page() {
        this.fetchPosts()
      },

 


    }

}

</script>

<style lang="scss">
.select {
  margin-right: 15px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.app__buttons {
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
   border: 1px solid teal;
   padding: 10px;
   margin: 5px;
}

.page:hover {
  background-color: lightblue;
}

.current_page {
  border: 2px solid teal;
  background-color: rgb(106, 186, 215);
}
</style>
