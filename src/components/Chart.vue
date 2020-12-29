<template>
    <div class="block">
        <div class="info" v-accordionToggle>
            <div class="title">{{ chart.title }}</div>

            <!-- <div class="disconnect">нет связи</div> -->

            <div class="temperature">{{ chart.temperature }} <sup>&#xb0;</sup></div>

            <div class="stats">
                <div>Период: {{ chart.period }} ч</div>
                <div>Шаг: {{ chart.step }} м</div>
            </div>

            <div class="arrow"></div>
        </div>

        <!-- <div class="chart">

        </div> -->
    </div>
</template>


<script>
export default {
    props: ['chart']
}
</script>