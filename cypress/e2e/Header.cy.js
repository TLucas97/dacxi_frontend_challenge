describe('Header', () => {
    it('should have a title', () => {
        cy.visit('/')
        cy.get('[data-testid=dacxi-logo]').should('be.visible')
        cy.get('[data-testid=coingecko-link]')
            .should('be.visible')
            .should(
                'have.attr',
                'href',
                'https://www.coingecko.com/en/api/documentation'
            )
    })
})
