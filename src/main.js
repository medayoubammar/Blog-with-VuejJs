import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode:'history'
});

//custom directives

Vue.directive('rainbow', {

  bind(el, binding, vnode) {
    //el is the hole elemnt in ur component file
    //binding is the name of directive in ur compoenent ex: rainbow
    //vnode chyhemek feha pour le mmt

    el.style.color = "#" + Math.random().toString().slice(2, 8);

  }


});

Vue.directive('theme', {

  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    }
    if (binding.arg = 'column') {
      el.style.background = '#ddd';
    }
  }


})


//Filters 

Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
})

Vue.filter('dot', function (value) {
  return value + '...';
})

new Vue({
  el: '#app',
  render: h => h(App),
  router : router
})
