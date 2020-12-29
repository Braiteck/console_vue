<template>
    <section class="mob_menu">
        <div class="row">
            <div><router-link to="/" class="active">
                <div class="icon icon1">
                    <img src="/images/ic_menu1.png" alt="">
                    <img src="/images/ic_menu1_a.png" alt="">
                </div>
                <span>Консоль</span>
            </router-link></div>

            <div><router-link to="/">
                <div class="icon icon2">
                    <img src="/images/ic_menu2.png" alt="">
                    <img src="/images/ic_menu2_a.png" alt="">
                </div>
                <span>Настройки</span>
            </router-link></div>

            <div><router-link to="/">
                <div class="icon icon3">
                    <img src="/images/ic_menu3.png" alt="">
                    <img src="/images/ic_menu3_a.png" alt="">
                </div>
                <span>Журнал</span>
            </router-link></div>

            <div><router-link to="/">
                <div class="icon icon4">
                    <img src="/images/ic_menu4.png" alt="">
                    <img src="/images/ic_menu4_a.png" alt="">
                </div>
                <span>Контакты</span>
            </router-link></div>
        </div>
    </section>
</template>


<script>
export default {

}
</script>