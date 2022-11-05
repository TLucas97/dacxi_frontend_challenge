import { render } from '@testing-library/vue'

import Content from '../../src/components/Content.vue'

import '@testing-library/jest-dom'

describe('Content.vue', () => {
    it('it renders', () => {
        const { getByTestId } = render(Content)
        expect(getByTestId('dacxi-content')).toBeInTheDocument()
        expect(getByTestId('progress-bar')).toBeInTheDocument()
        expect(getByTestId('dacxi-apex-chart')).toBeInTheDocument()
    })
    it('Uses the Content methods and the Utils methods on render', () => {
        const componentMethods = {
            setCripto: jest.spyOn(Content.methods, 'setCripto'),
            updateChart: jest.spyOn(Content.methods, 'updateChart'),
            timerUpdate: jest.spyOn(Content.methods, 'timerUpdate'),
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
        render(Content)
        expect(componentMethods.setCripto).toHaveBeenCalled()
        expect(componentMethods.updateChart).toHaveBeenCalled()
        expect(componentMethods.timerUpdate).toHaveBeenCalled()
        expect(methods.currentPrice).toHaveBeenCalled()
        expect(methods.marketChart).toHaveBeenCalled()
        expect(methods.formatPrice).toHaveBeenCalled()
    })
})
