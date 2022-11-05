import { render } from '@testing-library/vue'

import App from '../../src/App.vue'

import '@testing-library/jest-dom'

describe('App.vue', () => {
    it('it renders', () => {
        const { getByTestId } = render(App)
        expect(getByTestId('dacxi-app')).toBeInTheDocument()
    })
})
