require.config({
  nodeIdCompat: true,
  baseUrl:'./',
 
  paths: {
    vue         : 'js/lib/vue',
    'vue-router': 'js/lib/vue-router',
    axios       : 'js/lib/axios.min',
    routes      : 'js/routes',
    myComponent : 'js/myComponent',
    textComponent : 'js/textComponent',
 
  }
 
});
require(['vue',  'vue-router','routes','myComponent'],
    function (Vue,  VueRouter,routes,  myComponent) {
        Vue.use(VueRouter);
        var router = new VueRouter({
            routes:routes
        });
        let vue = new Vue({
            router: router,
            components: { myComponent: myComponent},
        
        }).$mount('#app'); 
});
