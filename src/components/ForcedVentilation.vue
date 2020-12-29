<template>
    <div class="block big_h" :class="{ on: data.status }" :style="cssVars">
        <div class="top">
            <div class="title">Приточная вентиляция</div>

            <div class="amount">
                <button type="button" class="minus" @click.prevent="forcedMinus"></button>

                <div class="val">
                    <span>{{ data.percents }}</span>%
                </div>

                <button type="button" class="plus" @click.prevent="forcedPlus"></button>
            </div>
        </div>

        <div class="bottom">
            <div class="ventilator">
                <img src="/images/ventilator_img.svg" alt="" class="icon">
                <img src="/images/ventilator_direction_img.png" alt="" class="direction">
            </div>

            <div class="on_off">
                <input type="checkbox" value="1" name="on_off" id="on_off_check1" v-model="data.status">
                <label for="on_off_check1"></label>
            </div>

            <div class="status">
                Статус:
                <span v-if="data.status">работает</span>
                <span v-else>не работает</span>
            </div>
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            percentsMin: 30,
            percentsMax: 100,
            // percentsStep: 5
        }
    },

    computed: {
        ...mapGetters({
            data: 'getForcedVentilation'
        }),

        cssVars() {
            if(this.data.percents < 100){
                return { '--spin_speed': 3 + (3 - (3 / 100 * this.data.percents)) + 's' }
            } else {
                return { '--spin_speed': '3s' }
            }
        }
    },

    methods: {
        forcedPlus: function () {
            if(this.data.percents < this.percentsMax){
                this.$store.dispatch('forcedPlus')
            }
        },

        forcedMinus:function () {
            if(this.data.percents > this.percentsMin){
                this.$store.dispatch('forcedMinus')
            }
        }
    },

    watch: {
        'data.status': function(){
            this.$store.dispatch('forcedToggle')
        }
    }
}
</script>