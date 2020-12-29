<template>
    <div>
        <div class="grid_blocks">
            <ForcedVentilation />

            <ExhaustVentilation />

            <SetTemperature />

            <Crash />

            <Additionally />
        </div>


        <div class="charts accordion">
            <Chart v-for="(chart, index) in charts" :key="`${index}`" :chart="chart" />
        </div>
    </div>
</template>


<script>
import ForcedVentilation from '../components/ForcedVentilation.vue'
import ExhaustVentilation from '../components/ExhaustVentilation.vue'
import SetTemperature from '../components/SetTemperature.vue'
import Crash from '../components/Crash.vue'
import Additionally from '../components/Additionally.vue'
import Chart from '../components/Chart.vue'

import { mapGetters } from 'vuex'

export default {
    components: {
        ForcedVentilation,
        ExhaustVentilation,
        SetTemperature,
        Crash,
        Additionally,
        Chart
    },

    computed: {
        ...mapGetters({
            charts: 'getCharts'
        })
    }
}
</script>