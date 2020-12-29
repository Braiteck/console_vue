<template>
    <div class="date_time" v-if="date">
        <div class="date">{{ date.date }}.{{ date.mnt }}.{{ date.year }}, {{ date.day }}</div>
        <div class="time">{{ date.hour }}:{{ date.min }}</div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            date: 'getDateTime'
        })
    }
}
</script>