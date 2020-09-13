<template>
<div v-theme:column="'wide'" id="show-blogs">
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
  </head>
  <h1>List Blog Titles</h1>
  <input type="text" v-model="search" id placeholder="search blogs" />
  <div v-for="(blog,index) in filterdBlogs" v-bind:key="index" class="single-blog">
    <h2 v-rainbow>{{ blog.title }}</h2>
    <article>{{ blog.body | to-uppercase | dot}}</article>
  </div>
</div>
</template>

<script>

import searchMixin from '../mixins/searchMixin';

export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},

  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        // console.log(data);
        this.blogs = data.body.slice(0, 10);
      });
  },
  mixins:[searchMixin]
 /*
      this computed will be using in searchMixin.js
    computed: {
   filterdBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.toLowerCase().match(this.search.toLowerCase());
      });
    }
  } */
};
</script>



<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: rgb(239, 146, 255);
}
h2,
h1 {
  color: black;
  font-family: "Pacifico", cursive;
  font-size: 20px;
}
</style>