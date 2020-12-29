<template>
    <div class="block crash" :class="{ red: crashes.length, green: !crashes.length }">
        <div class="top">
            <div class="title">Аварии:</div>

            <div class="list" v-if="crashes.length">
                <div v-for="(crash, index) in crashes" :key="`${index}`">
                    {{ crash.name }}
                </div>
            </div>

            <div class="empty" v-else>не обнаружено</div>
        </div>

        <img src="/images/ic_crash_green.png" alt="" class="green icon">
        <img src="/images/ic_crash_red.png" alt="" class="red icon">
    </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            crashes: 'getСrashes'
        })
    }
}
</script>