<template>
    <v-app>
        <div class="bg-dacxi-white h-full">
            <Header />
            <div
                class="flex justify-between align-center w-8/12 mx-auto height-adjust"
            >
                <div>
                    <p class="text-center text-sm" @click="updateChart()">
                        {{ priceTitle }} test
                    </p>
                    <div v-if="loading" class="flex justify-center mb-7">
                        <v-progress-circular
                            indeterminate
                            color="blue"
                        ></v-progress-circular>
                    </div>
                    <h1
                        v-else
                        class="text-center mb-5 text-h4 fade-in fade-out font-weight-bold text-dacxi-error"
                    >
                        {{
                            progressView
                                ? formatCurrency(price, coin.currentCoin)
                                : formatCurrency(oldPrice, coin.currentCoin)
                        }}
                    </h1>
                    <div
                        v-if="progressView"
                        class="flex justify-center align-center mb-10 fade-in fade-out"
                    >
                        <v-progress-linear
                            :value="progressValue"
                        ></v-progress-linear>
                    </div>
                    <v-select
                        :items="cripto.criptos"
                        label="Select your criptocurrency"
                        v-model="cripto.currentCripto"
                        @change="progressView ? setCripto() : setDateTime()"
                        prepend-icon="mdi-hand-coin"
                        outlined
                    ></v-select>
                    <v-select
                        :items="coin.coins"
                        label="Select your coin"
                        v-model="coin.currentCoin"
                        @change="progressView ? setCripto() : setDateTime()"
                        prepend-icon="mdi-currency-usd"
                        outlined
                    ></v-select>
                    <h3 class="mb-4">Filter price by specific date</h3>
                    <v-text-field
                        outlined
                        :disabled="!progressView"
                        label="Select date"
                        type="date"
                        v-model="currentTime.date"
                    />
                    <v-text-field
                        outlined
                        :disabled="!progressView"
                        label="Select hour"
                        type="time"
                        v-model="currentTime.hour"
                    />
                    <v-btn
                        class="text-capitalize"
                        @click="progressView ? setDateTime() : clearFilters()"
                        >{{ filterButton }}</v-btn
                    >
                </div>
                <div>
                    <div
                        class="flex justify-end mb-5 font-weight-bold fade-in fade-out"
                    >
                        <h3>
                            <span class="text-capitalize">{{
                                cripto.currentCripto
                            }}</span>
                            Graph History from 30 days ago in
                            <span class="text-uppercase text-dacxi-success">{{
                                coin.currentCoin
                            }}</span>
                        </h3>
                    </div>
                    <apexchart
                        width="650"
                        type="area"
                        :options="options"
                        :series="series"
                        class="fade-in fade-out"
                    ></apexchart>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
import {
    getCoinCurrentPrice,
    formatPriceBasedOnCoin,
    getCurrentCoinPriceBasedOnDate,
    convertDateToMiliseconds,
    validateDateBasedOnCrypto,
    disableFutureDates,
    getCoinMarketChart,
} from './utils/methods'
import Header from './components/Header.vue'

export default {
    name: 'App',
    components: {
        Header,
    },
    data: () => ({
        loading: false,
        currentTime: {
            date: '',
            hour: '',
        },
        priceTitle: 'Current price',
        filterButton: 'Filter',
        price: '',
        oldPrice: '',
        dateTime: '',
        progressValue: 0,
        progressView: true,
        options: {
            chart: {
                id: 'dacxi-cripto-chart',
            },
            xaxis: {
                categories: [],
            },
        },
        series: [
            {
                name: '',
                data: [],
            },
        ],
        coin: {
            coins: [
                {
                    text: 'USD',
                    value: 'usd',
                },
                {
                    text: 'EUR',
                    value: 'eur',
                },
                {
                    text: 'BRL',
                    value: 'brl',
                },
            ],
            currentCoin: 'usd',
        },
        cripto: {
            criptos: [
                {
                    text: 'Ethereum',
                    value: 'ethereum',
                },
                {
                    text: 'Bitcoin',
                    value: 'bitcoin',
                },
                {
                    text: 'Luna',
                    value: 'terra-luna',
                },
                {
                    text: 'Dacxi',
                    value: 'dacxi',
                },
            ],
            currentCripto: 'bitcoin',
        },
    }),
    async mounted() {
        this.loadChart()
        this.setCripto()
        this.timerUpdate()
    },
    methods: {
        async loadChart() {
            const { prices } = await getCoinMarketChart(
                this.cripto.currentCripto,
                this.coin.currentCoin
            )
            this.series[0].data = prices.map((price) => price[1].toFixed(4))
            this.series[0].name = 'bitcoin $'
        },
        async updateChart() {
            const { prices } = await getCoinMarketChart(
                this.cripto.currentCripto,
                this.coin.currentCoin
            )
            const ain = prices.map((price) => price[1].toFixed(4))
            this.series = [
                {
                    data: ain,
                    name: this.cripto.currentCripto.toLocaleUpperCase(),
                },
            ]
        },
        async setCripto() {
            this.loading = true
            this.progressValue = 0
            this.price = await getCoinCurrentPrice(
                this.cripto.currentCripto,
                this.coin.currentCoin
            )
            await this.updateChart()
            this.loading = false
        },
        timerUpdate() {
            setInterval(() => {
                if (!this.progressView) return
                this.progressValue += 1
                if (this.progressValue > 100) {
                    this.progressValue = 0
                    this.setCripto()
                }
            }, 100)
        },
        formatCurrency(value, coin) {
            return formatPriceBasedOnCoin(value, coin)
        },
        async setDateTime() {
            if (this.currentTime.date === '' || this.currentTime.hour === '') {
                this.$toast.warning('Please select a date and hour')
                return
            }
            const fullDate = new Date(
                this.currentTime.date + ' ' + this.currentTime.hour
            )
            const dateValidation = disableFutureDates(fullDate)
            if (dateValidation) {
                this.$toast.warning("You can't select a future date")
                return
            }
            this.progressView = false
            this.loading = true
            const dateResult = validateDateBasedOnCrypto(
                this.cripto.currentCripto,
                fullDate
            )
            const fulldatePlusOneHour = new Date(
                dateResult.getTime() + 300 * 300 * 1000
            )
            const fullDateMinusOneHour = new Date(
                dateResult.getTime() - 300 * 300 * 1000
            )
            const result = await getCurrentCoinPriceBasedOnDate(
                this.cripto.currentCripto,
                this.coin.currentCoin,
                fullDateMinusOneHour,
                fulldatePlusOneHour
            )
            const currentDateTimeStamp = convertDateToMiliseconds(fullDate)
            const closestPrice = result.prices.reduce((prev, curr) => {
                return Math.abs(curr[0] - currentDateTimeStamp) <
                    Math.abs(prev[0] - currentDateTimeStamp)
                    ? curr
                    : prev
            })
            this.oldPrice = closestPrice[1]
            this.priceTitle = 'Closest available price'
            this.filterButton = 'Clear filters'
            this.loading = false
        },
        clearFilters() {
            this.progressView = true
            this.priceTitle = 'Current price'
            this.filterButton = 'Filter'
            this.currentTime.date = ''
            this.currentTime.hour = ''
            this.setCripto()
        },
    },
}
</script>
