<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs" class="search-bar"/>
        <div v-for="(blog, index) in filteredBlogs" class="single-blog" :key="index">
            <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase }}</h2></router-link>
            <article>{{ blog.body | snippet }}</article>
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
  methods: {
  },
  created () {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then((data) => {
    //   console.log(data.body)
      this.blogs = data.body.slice(0, 10)
    })
  },
  computed: {

  },
  mixins: [searchMixin]
}
</script>

<style>

h1 {
    color: #444;
}

#show-blogs {
    display: grid;
    max-width: 800px;
    margin: 0px auto;
    border-radius: 10px;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: white;
    border-radius: 10px;
}

.search-bar {
    padding: 10px;
    margin: 20px 0;
    box-sizing: border-box;
    background: white;
    border-radius: 5px;
}
</style>
