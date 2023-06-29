import Vue from 'vue'
import App from './App.vue'
import router from "./route/index";

new Vue({
  data(){
    return {
      card: [],
    };
  },
  router,
  render: h => h(App),
}).$mount('#app')
