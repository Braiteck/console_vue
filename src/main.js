import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store'
import router from './router'
import { accordionToggle } from './directives'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
    store,
    router,
    directives: {
        accordionToggle
    },
    render: h => h(App),
}).$mount('#app')
