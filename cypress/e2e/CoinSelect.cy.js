describe('Select', () => {
    it('it should change cripto value and chart title text when coin select is used', () => {
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
