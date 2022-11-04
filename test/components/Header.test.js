import { render } from '@testing-library/vue'

import Header from '../../src/components/Header.vue'

import '@testing-library/jest-dom'

describe('Header.vue', () => {
    it('it renders', () => {
        const { getByTestId } = render(Header)
        expect(getByTestId('dacxi-header')).toBeInTheDocument()
    })
})
