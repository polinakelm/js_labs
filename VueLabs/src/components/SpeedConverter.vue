<template>
    <div>
        <label>
            Скорость (км/ч):
            <input type="number" v-model.number="speedKmph" @input="convertToMps">
        </label>
        <br>
        <label>
            Скорость (м/с):
            <input type="number" v-model.number="speedMps" @input="convertToKmph">
        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            speedKmph: 0,
            speedMps: 0
        }
    },
    methods: {
        convertToMps() {
            this.speedMps = (this.speedKmph / 3.6).toFixed(5);
        },
        convertToKmph() {
            this.speedKmph = (this.speedMps * 3.6).toFixed(5);
        }
    }
}
</script>