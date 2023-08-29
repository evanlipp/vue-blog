import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import PostItemPage from '@/views/PostItemPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    name: 'main',
    path: '/',
    component: MainPage 
  },
  {
    name: 'post',
    path: '/:id',
    component: PostItemPage,
    props: true,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
})

export default router;