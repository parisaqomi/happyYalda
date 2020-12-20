import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')