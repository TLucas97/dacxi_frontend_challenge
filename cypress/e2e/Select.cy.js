describe('Select', () => {
    it('it should change cripto value and chart title text when cripto select is used', () => {
        cy.visit('/')
        cy.get('[data-testid=loading-spinner]').should('be.visible')
        cy.get('[data-testid=cripto-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(0).click()
        cy.get('[data-testid=current-cripto-title]').should(
            'have.text',
            'ethereum'
        )
        cy.get('[data-testid=cripto-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(1).click()
        cy.get('[data-testid=current-cripto-title]').should(
            'have.text',
            'bitcoin'
        )
        cy.get('[data-testid=cripto-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(2).click()
        cy.get('[data-testid=current-cripto-title]').should(
            'have.text',
            'terra-luna'
        )
        cy.get('[data-testid=cripto-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(3).click()
        cy.get('[data-testid=current-cripto-title]').should(
            'have.text',
            'dacxi'
        )
    })
    it('it should change cripto value and chart title text when coin select is used', () => {
        cy.visit('/')
        cy.get('[data-testid=coin-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(1).click()
        cy.get('[data-testid=current-coin-title]').should('have.text', 'eur')
        cy.get('[data-testid=coin-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(0).click()
        cy.get('[data-testid=current-coin-title]').should('have.text', 'usd')
        cy.get('[data-testid=coin-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(2).click()
        cy.get('[data-testid=current-coin-title]').should('have.text', 'brl')
    })
})
