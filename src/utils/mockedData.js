export const mockedData = [
    {
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
    {
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
    {
        options: {
            chart: {
                id: 'dacxi-cripto-chart',
            },
            xaxis: {
                categories: [],
            },
            responsive: [
                {
                    breakpoint: 600,
                    options: {
                        chart: {
                            width: 350,
                            height: 400,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
        },
        series: [
            {
                name: '',
                data: [],
            },
        ],
    },
]
