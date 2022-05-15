<template>
    <div id="show-blogs">
        <h1>List Blog Titles</h1>
        <input type="text" v-model="search" placeholder="search blogs" />
        <div v-for="(blog, index) in filteredBlogs" class="single-blog" :key="index">
            <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
        </div>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin'

export default {
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  created () {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function (data) {
      this.blogs = data.body.slice(0, 10)
    })
  },
  mixins: [searchMixin]
}
</script>

<style>
#show-blogs {
    display: grid;
    max-width: 800px;
    margin: 0px auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
