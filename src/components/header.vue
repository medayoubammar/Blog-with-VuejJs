<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>Blog</router-link>
      </li>
       <li>
        <router-link to="/add" exact>add new blog</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-active{
    color:red
}
</style>