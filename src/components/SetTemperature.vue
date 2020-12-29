<template>
    <div class="block big_h">
        <div class="top">
            <div class="title">Заданная температура</div>

            <div class="amount">
                <button type="button" class="minus" @click.prevent="temperatureMinus"></button>

                <div class="val">
                    <span>{{ data.value }}</span><sup>&#xb0;</sup>
                </div>

                <button type="button" class="plus" @click.prevent="temperaturePlus"></button>
            </div>
        </div>

        <div class="bottom">
            <div class="type" v-if="data.type == 1">
                <span>Нагреватель</span>
                <img src="/images/ic_fire.png" alt="">
            </div>

            <div class="type" v-if="data.type == 2">
                <span>Охладитель</span>
                <img src="/images/ic_cold.png" alt="">
            </div>

            <div class="percents">{{ data.percents }}%</div>

            <div class="mode" v-if="data.type == 1">Режим: нагрев</div>
            <div class="mode" v-if="data.type == 2">Режим: охлаждение</div>
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            temperatureMin: 10,
            temperatureMax: 35.5,
            // temperatureStep: 0.5
        }
    },

    computed: {
        ...mapGetters({
            data: 'getTemperature'
        })
    },

    methods: {
        temperaturePlus: function () {
            if(parseFloat(this.data.value) > this.temperatureMin){
                this.$store.dispatch('temperaturePlus')
            }
        },

        temperatureMinus:function () {
            if(parseFloat(this.data.value) < this.temperatureMax){
                this.$store.dispatch('temperatureMinus')
            }
        }
    }
}
</script>