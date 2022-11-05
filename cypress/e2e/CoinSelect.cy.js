describe('Select', () => {
    it('it should change coin value and chart title text when coin select is used', () => {
        // ** Selects the coin to be used in the test with a 6 seconds interval to prevent API errors **
        cy.visit('/')
        cy.wait(6000)
        cy.get('[data-testid=coin-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(1).click()
        cy.get('[data-testid=current-coin-title]').should('have.text', 'eur')
        cy.wait(6000)
        cy.get('[data-testid=coin-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(0).click()
        cy.get('[data-testid=current-coin-title]').should('have.text', 'usd')
        cy.wait(6000)
        cy.get('[data-testid=coin-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(2).click()
        cy.get('[data-testid=current-coin-title]').should('have.text', 'brl')
    })
})
