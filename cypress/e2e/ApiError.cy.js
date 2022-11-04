describe('api error', () => {
    it('should show error message', () => {
        cy.intercept('GET', 'https://api.coingecko.com/api/v3/coins/bitcoin', {
            statusCode: 500,
        })
        cy.visit('/')
        cy.get('h1').should('have.text', ' $0 ')
    })
})
