<template>
    <section class="wrap">
        <section class="main">
            <section class="content_flex row">
                <aside>
                    <div class="scroll">
                        <DateTime />

                        <Menu />
                    </div>

                    <button class="toggle_show" @click="toggleSidebar()">
                        <span></span>
                    </button>
                </aside>


                <section class="content">
                    <div class="cont">
                        <div class="mob_date">
                            <DateTime />
                        </div>

                        <transition name="fade">
                        <router-view></router-view>
                        </transition>

                        <MobMenu />
                    </div>
                </section>
            </section>


            <div class="supports_error">
                Ваш браузер устарел рекомендуем обновить его до последней версии<br> или использовать другой более современный.
            </div>
        </section>
    </section>
</template>


<script>
import DateTime from './components/sidebar/DateTime.vue'
import Menu from './components/sidebar/Menu.vue'
import MobMenu from './components/MobMenu.vue'

export default {
    name: 'App',

    components: {
        DateTime,
        Menu,
        MobMenu
    },

    methods: {
        toggleSidebar() {
            document.body.classList.toggle('show_sidebar')
        }
    }
}
</script>