import { render, fireEvent } from '@testing-library/vue'

import App from '../../src/App.vue'

import '@testing-library/jest-dom'

describe('App.vue', () => {
    it('it renders', () => {
        const { getByTestId } = render(App)
        expect(getByTestId('dacxi-app')).toBeInTheDocument()
        expect(getByTestId('progress-bar')).toBeInTheDocument()
        expect(getByTestId('dacxi-apex-chart')).toBeInTheDocument()
    })
    it('Uses the App methods and the Utils methods on render', () => {
        const componentMethods = {
            setCripto: jest.spyOn(App.methods, 'setCripto'),
            updateChart: jest.spyOn(App.methods, 'updateChart'),
            timerUpdate: jest.spyOn(App.methods, 'timerUpdate'),
        }
        const methods = {
            currentPrice: jest.spyOn(
                require('../../src/utils/methods'),
                'getCoinCurrentPrice'
            ),
            marketChart: jest.spyOn(
                require('../../src/utils/methods'),
                'getCoinMarketChart'
            ),
            formatPrice: jest.spyOn(
                require('../../src/utils/methods'),
                'formatPriceBasedOnCoin'
            ),
        }
        render(App)
        expect(componentMethods.setCripto).toHaveBeenCalled()
        expect(componentMethods.updateChart).toHaveBeenCalled()
        expect(componentMethods.timerUpdate).toHaveBeenCalled()
        expect(methods.currentPrice).toHaveBeenCalled()
        expect(methods.marketChart).toHaveBeenCalled()
        expect(methods.formatPrice).toHaveBeenCalled()
    })
})
