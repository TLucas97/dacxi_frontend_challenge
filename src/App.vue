<template>
    <v-app>
        <div class="bg-dacxi-white h-full" data-testid="dacxi-app">
            <Header />
            <div
                class="flex justify-evenly flex-column flex-md-row align-center w-11/12 sm:w-11/12 mx-auto height-adjust"
            >
                <div>
                    <p class="text-center text-sm">{{ priceTitle }}</p>
                    <div v-if="loading" class="flex justify-center mb-7">
                        <v-progress-circular
                            indeterminate
                            color="blue"
                            data-testid="loading-spinner"
                        ></v-progress-circular>
                    </div>
                    <h1
                        v-else
                        class="text-center mb-5 text-h4 fade-in fade-out font-weight-bold text-dacxi-error"
                        data-test-id="price"
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
                            data-testid="progress-bar"
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
                        data-testid="cripto-select"
                    ></v-select>
                    <v-select
                        :items="coin.coins"
                        label="Select your coin"
                        v-model="coin.currentCoin"
                        @change="progressView ? setCripto() : setDateTime()"
                        prepend-icon="mdi-currency-usd"
                        outlined
                        data-testid="coin-select"
                    ></v-select>
                    <h3 class="mb-4">Filter price by specific date</h3>
                    <v-text-field
                        outlined
                        :disabled="!progressView"
                        label="Select date"
                        type="date"
                        v-model="currentTime.date"
                        data-testid="date-input"
                    />
                    <v-text-field
                        outlined
                        :disabled="!progressView"
                        label="Select hour"
                        type="time"
                        v-model="currentTime.hour"
                        data-testid="hour-input"
                    />
                    <v-btn
                        class="text-capitalize"
                        data-testid="submit-date-button"
                        @click="progressView ? setDateTime() : clearFilters()"
                        >{{ filterButton }}</v-btn
                    >
                </div>
                <div class="mt-10 mt-md-0">
                    <div
                        class="flex justify-center mb-5 font-weight-bold fade-in fade-out"
                    >
                        <h3 class="text-base">
                            <span
                                class="text-capitalize"
                                data-testid="current-cripto-title"
                                >{{ cripto.currentCripto }}</span
                            >
                            Graph History from 30 days ago in
                            <span
                                class="text-uppercase text-dacxi-success"
                                data-testid="current-coin-title"
                                >{{ coin.currentCoin }}</span
                            >
                        </h3>
                    </div>
                    <div>
                        <apexchart
                            width="600"
                            type="area"
                            :options="options"
                            :series="series"
                            class="fade-in fade-out"
                            data-testid="dacxi-apex-chart"
                        ></apexchart>
                    </div>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
import * as gecko from './utils/methods'
import { mockedData } from './utils/mockedData'
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
        coin: mockedData[0],
        cripto: mockedData[1],
        options: mockedData[2].options,
        series: mockedData[2].series,
    }),
    mounted() {
        this.setCripto()
        this.timerUpdate()
        this.updateChart()
    },
    methods: {
        async updateChart() {
            try {
                const { prices } = await gecko.getCoinMarketChart(
                    this.cripto.currentCripto,
                    this.coin.currentCoin
                )
                const pricesArr = prices.map((price) => price[1].toFixed(4))
                this.series = [
                    {
                        data: pricesArr,
                        name: this.cripto.currentCripto.toLocaleUpperCase(),
                    },
                ]
            } catch (error) {
                this.$toast.error(
                    'Error getting data, possible API error. Visit https://www.coingecko.com/en/api for more info'
                )
            }
        },
        async setCripto() {
            this.loading = true
            this.progressValue = 0
            try {
                this.price =
                    (await gecko.getCoinCurrentPrice(
                        this.cripto.currentCripto,
                        this.coin.currentCoin
                    )) || 0
                await this.updateChart()
                this.loading = false
            } catch (error) {
                this.loading = false
                this.$toast.error(
                    'Error getting data, possible API error. Visit https://www.coingecko.com/en/api for more info'
                )
            }
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
            return gecko.formatPriceBasedOnCoin(value, coin)
        },
        async setDateTime() {
            if (this.currentTime.date === '' || this.currentTime.hour === '') {
                this.$toast.warning('Please select a date and hour')
                return
            }
            const fullDate = gecko.mergeDateAndTime(
                this.currentTime.date,
                this.currentTime.hour
            )
            if (gecko.disableFutureDates(fullDate)) {
                this.$toast.warning("You can't select a future date")
                return
            }
            this.progressView = false
            this.loading = true
            const dateResult = gecko.validateDateBasedOnCrypto(
                this.cripto.currentCripto,
                fullDate
            )
            try {
                const result = await gecko.getCurrentCoinPriceBasedOnDate(
                    this.cripto.currentCripto,
                    this.coin.currentCoin,
                    dateResult
                )
                this.oldPrice = result[1]
                this.priceTitle = 'Closest available price'
                this.filterButton = 'Clear filters'
                this.loading = false
            } catch (error) {
                this.loading = false
                this.$toast.error(
                    'Error getting data, possible API error. Visit https://www.coingecko.com/en/api for more info'
                )
            }
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
