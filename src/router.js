import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '@/store'

const Console = () => import('./pages/PageConsole.vue')

Vue.use(VueRouter)


const router = new VueRouter({
    'mode': 'history',
    'active-class': 'active',
    'routes': [
        {
            path: '/',
            component: Console
        }
    ]
})


// Запускается перед каждым роутом
router.beforeEach((to, from, next) => {
    // Загрузка данных
    var dataPromise = store.dispatch('loadState')

    setInterval(function () {
        store.dispatch('loadState')
    }, 500)

    Promise.all([dataPromise]).then(() => {
        next()
    })
})


export default router