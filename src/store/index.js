import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    posts: [],
  }),

  getters: {
    getPosts(state) {
      return state.posts
    },
    getPostWithId(state) {
      return function (id) {
        return state.posts.find((post) => Number(post.id) === Number(id))
      }
    },

    getFormatedDate(state) {
      return function (date) {
        const postDate = new Date(date)
        return postDate.toLocaleDateString()
      }
    }
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },

    addPost(state, post) {
      state.posts.unshift(post)
    },

    deletePost(state, post) {
      state.posts = state.posts.filter((postItem) => postItem.id !== post.id)
    },

    saveEditedPost(state, post) {
      const newPosts = state.posts.map((postItem) => {
        if (postItem.id === post.id) {
          return Object.assign(postItem, post)
        } else {
          return postItem
        }
      })
      state.posts = newPosts
    },
  },
})
