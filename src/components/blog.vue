<template>
  <div>
    <h2>Add a new Blog Post</h2>

    <form v-if="!submited" style="float:left">
     
      <div>
        <p>Blog Title:</p>
        <input type="text" class="textInput" v-model.lazy="Blog.titleBlog" required />
      </div>
      <div class="blogCon">
        <p id="blogCon">Blog content:</p>
        <textarea v-model.lazy="Blog.areaBlog" cols="30" rows="10"></textarea>
      </div>

      <div id="checkboxed">
        <label id="checkboxes">Bad</label>
        <input type="checkbox" v-model="Blog.cat" value="bad" />
        <label class="checkboxes">Not bad</label>
        <input type="checkbox" v-model="Blog.cat" value="not bad" />
        <label class="checkboxes">Good</label>
        <input type="checkbox" v-model="Blog.cat" value="good" />
        <label class="checkboxes">Fabulous</label>
        <input type="checkbox" v-model="Blog.cat" value="fabulous" />
      </div>

      <div class="author">
        <label for>Author:</label>
        <select v-model="Blog.author">
          <option v-for="(author,index) in authors" v-bind:key="index">{{ author }}</option>
        </select>
      </div>

<button v-on:click.prevent="post">Add this Blog </button>

    </form>
     <div v-if="submited">
      <h1> Thanks for adding your blog </h1>
     </div>

    <div id="preview" style="float:right">
      <h2>Preview Blog</h2>
      <p>Blog Title :</p>
      <h3>{{ Blog.titleBlog }}</h3>
      <p>Blog Content :</p>
      <h3>
        <div id="blogcontent">{{ Blog.areaBlog }}</div>
      </h3>
      <p>Blog Categories :</p>
      <ul>
        <li v-for="(category,index) in Blog.cat" v-bind:key="index">{{ category }}</li>
      </ul>
      <div>
        <h3>
          the Author :
          <h3>{{ Blog.author }}</h3>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Blog: {
        titleBlog: "",
        areaBlog: "",
        cat: [] },
        
        authors: ["Hmiden", "Reznove", "Kachroudi"],
        submited: false
      
    };
  },


methods:{

post: function(){
  this.$http.post('https://gmcfirebase.firebaseio.com',
  {
    title: this.Blog.titleBlog,
    body: this.Blog.content,
    userID : 1
  }).then(function(data){
    console.log(data);
    this.submited = true;
  });

}
}



};
</script>

<style scoped>
form {
  text-align: center;
  justify-content: space-around;
  margin: 0 auto;
  background-color: grey;
  width: 45%;
  border-radius: 2%;
  box-shadow: 5px 5px 5px 5px rgb(77, 77, 77);
}

textarea {
  margin: 0 auto;
  width: 30%;
  text-align: center;
  border-radius: 10px;
  border-color: #ffffff;
  box-shadow: 5px 5px 10px 5px rgb(77, 77, 77);
  margin-bottom: 15px;
}
.textInput {
  text-align: center;
  border-color: #ffffff;

  width: 20%;
  box-shadow: 5px 5px 5px 5px rgb(77, 77, 77);
}
#preview {
  text-align: center;
  background-color: rgb(187, 139, 139);
  position: relative;
  margin: 0 auto;
  width: 50%;
  box-shadow: 2px 10px 10px 5px rgb(187, 115, 115);
  border-radius: 10px;
  justify-content: center;
  background-image: url(../assets/maxresdefault.jpg);

  margin-right: 10px;
}
#blogcontent {
  justify-content: initial;
}
ul {
  display: inline-block;
}
</style>