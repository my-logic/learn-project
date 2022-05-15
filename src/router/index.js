import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlogs from '@/components/ShowBlogs'
import ListBlogs from '@/components/ListBlogs'
import SingleBlog from '@/components/SingleBlog'

Vue.use(Router)

export default new Router({
  mode: 'history', // to remove # from URL
  routes: [
    {
      path: '/',
      name: 'ShowBlogs',
      component: ShowBlogs
    },
    {
      path: '/list',
      name: 'ListBlogs',
      component: ListBlogs
    },
    {
      path: '/add',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/blog/:id',
      name: 'SingleBlog',
      component: SingleBlog
    }
  ]
})
