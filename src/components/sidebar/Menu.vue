<template>
    <div class="bottom">
        <router-link to="/" class="site_name">Консоль</router-link>

        <div class="menu">
            <div class="item">
                <router-link to="/">
                    <div class="icon icon2">
                        <img src="/images/ic_menu2_a.png" alt="">
                    </div>
                    <div>Настройки</div>
                </router-link>

                <div class="sub_menu">
                    <div><router-link to="/">Приток</router-link></div>
                    <div><router-link to="/">Вытяжка</router-link></div>
                    <div><router-link to="/">Регулятор</router-link></div>
                </div>
            </div>

            <div class="item">
                <router-link to="/">
                    <div class="icon icon3">
                        <img src="/images/ic_menu3_a.png" alt="">
                    </div>
                    <div>Журнал<span>49</span></div>
                </router-link>
            </div>

            <div class="item">
                <router-link to="/">
                    <div class="icon icon4">
                        <img src="/images/ic_menu4_a.png" alt="">
                    </div>
                    <div>Контакты</div>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {

}
</script>