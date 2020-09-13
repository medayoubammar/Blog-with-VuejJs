<template>
  <div id="single-blog">
      <h1>
          <article>
{{ blog.body }}
          </article>
      </h1>
  </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts/'+ this.id).then(
            function(data){
                this.blog = data.body;


            }
        )
    }

}
</script>

<style>

</style>