import geckoApi from './geckoApi'

export const getCoinMarketChart = async (cripto, coin, days = 30) => {
    const { data } = await geckoApi.get(`/coins/${cripto}/market_chart?`, {
        params: {
            vs_currency: coin,
            days: days,
            interval: 'daily',
        },
    })
    return data
}

export const getCoinCurrentPrice = async (cripto, coin) => {
    try {
        const { data } = await geckoApi.get(`/coins/${cripto}`)
        return data?.market_data.current_price?.[coin]
    } catch (error) {
        console.log(error)
    }
}

export const getCurrentCoinPriceBasedOnDate = async (
    cripto,
    coin,
    fromDate,
    toDate
) => {
    const fromTimestamp = convertDateToMiliseconds(fromDate)
    const toTimestamp = convertDateToMiliseconds(toDate)
    try {
        const { data } = await geckoApi.get(
            `/coins/${cripto}/market_chart/range?vs_currency=${coin}&from=${fromTimestamp}&to=${toTimestamp}`
        )
        return data
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
