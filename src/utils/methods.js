import geckoApi from './geckoApi'

export const getCoinMarketChart = async (cripto, coin, days = 30) => {
    try {
        const { data } = await geckoApi.get(`/coins/${cripto}/market_chart?`, {
            params: {
                vs_currency: coin,
                days: days,
                interval: 'daily',
            },
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getCoinCurrentPrice = async (cripto, coin) => {
    try {
        const { data } = await geckoApi.get(`/coins/${cripto}`)
        return data?.market_data.current_price?.[coin]
    } catch (error) {
        console.log(error)
    }
}

export const getPastFutureRange = (date, futureOrPast) => {
    const timeState = {
        future: new Date(date.getTime() + 300 * 300 * 1000),
        past: new Date(date.getTime() - 300 * 300 * 1000),
    }
    return timeState[futureOrPast]
}

export const getCurrentCoinPriceBasedOnDate = async (
    cripto,
    coin,
    targetDate
) => {
    const ranges = {
        pastDate: getPastFutureRange(targetDate, 'past'),
        futureDate: getPastFutureRange(targetDate, 'future'),
    }
    const timeStamps = {
        from: convertDateToMiliseconds(ranges.pastDate),
        to: convertDateToMiliseconds(ranges.futureDate),
        current: convertDateToMiliseconds(targetDate),
    }
    try {
        const { data } = await geckoApi.get(
            `/coins/${cripto}/market_chart/range?`,
            {
                params: {
                    vs_currency: coin,
                    from: timeStamps.from,
                    to: timeStamps.to,
                },
            }
        )
        const closestPrice = data.prices.reduce((prev, curr) => {
            return Math.abs(curr[0] - timeStamps.current) <
                Math.abs(prev[0] - timeStamps.current)
                ? curr
                : prev
        })
        return closestPrice
    } catch (error) {
        console.log(error)
    }
}

export const formatPriceBasedOnCoin = (price, coin) => {
    const coins = {
        usd: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumSignificantDigits: 3,
        }).format(price),
        eur: new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
            maximumSignificantDigits: 3,
        }).format(price),
        brl: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumSignificantDigits: 3,
        }).format(price),
    }
    return coins[coin]
}

export const convertDateToMiliseconds = (date) => {
    return date.getTime() / 1000
}

export const validateDateBasedOnCrypto = (cripto, oldDate) => {
    const cryptoLimitDate = {
        bitcoin: 1367323200,
        ethereum: 1438947200,
        'terra-luna': 1559217600,
        dacxi: 1625140800,
    }
    const criptos = {
        bitcoin:
            convertDateToMiliseconds(oldDate) < cryptoLimitDate[cripto]
                ? new Date(cryptoLimitDate[cripto] * 1000)
                : oldDate,
        ethereum:
            convertDateToMiliseconds(oldDate) < cryptoLimitDate[cripto]
                ? new Date(cryptoLimitDate[cripto] * 1000)
                : oldDate,
        'terra-luna':
            convertDateToMiliseconds(oldDate) < cryptoLimitDate[cripto]
                ? new Date(cryptoLimitDate[cripto] * 1000)
                : oldDate,
        dacxi:
            convertDateToMiliseconds(oldDate) < cryptoLimitDate[cripto]
                ? new Date(cryptoLimitDate[cripto] * 1000)
                : oldDate,
    }
    return criptos[cripto]
}

export const disableFutureDates = (date) => {
    const today = new Date()
    return date > today
}

export const mergeDateAndTime = (date, time) => {
    return new Date(date + ' ' + time)
}
