<template>
    <div class="block">
        <div class="top">
            <div class="additionally">
                Рекуператор:
                <span v-if="сoolerStatus">работает</span>
                <span v-else>не работает</span>
            </div>

            <div class="additionally">
                Насос:
                <span v-if="umpStatus">работает</span>
                <span v-else>не работает</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            сoolerStatus: 'getСoolerStatus',
            umpStatus: 'getPumpStatus'
        })
    }
}
</script>