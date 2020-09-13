<template>
<div>
  <head>
    <!-- <link rel="stylesheet" type="css" href="assets/style.css" /> -->
  </head>
  <!-- BLOG   <app-blog></app-blog> -->
  <!-- <show-blogs></show-blogs>
  <list-blogs></list-blogs>-->
  <header-blog></header-blog>
  <router-view></router-view>
</div>
</template>

<script>
import blog from "./components/blog.vue";
import showBlogs from "./components/showBlogs.vue";
import listBlogs from "./components/listBlogs.vue";
import header from "./components/header.vue";

export default {
  components: {
    "app-blog": blog,
    "show-blogs": showBlogs,
    "list-blogs": listBlogs,
    "header-blog": header
  }
};
</script>



<style scoped>
@import "./assets/styles/style.css";
</style>