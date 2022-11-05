describe('Cripto Select', () => {
    it('it should change cripto value and chart title text when cripto select is used', () => {
        // ** Selects the cripto to be used in the test with a 6 seconds interval to prevent API errors **
        cy.visit('/')
        cy.get('[data-testid=loading-spinner]').should('be.visible')
        cy.wait(6000)
        cy.get('[data-testid=cripto-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(0).click()
        cy.get('[data-testid=current-cripto-title]').should(
            'have.text',
            'ethereum'
        )
        cy.wait(6000)
        cy.get('[data-testid=cripto-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(1).click()
        cy.get('[data-testid=current-cripto-title]').should(
            'have.text',
            'bitcoin'
        )
        cy.wait(6000)
        cy.get('[data-testid=cripto-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(2).click()
        cy.get('[data-testid=current-cripto-title]').should(
            'have.text',
            'terra-luna'
        )
        cy.wait(6000)
        cy.get('[data-testid=cripto-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(3).click()
        cy.get('[data-testid=current-cripto-title]').should(
            'have.text',
            'dacxi'
        )
        cy.wait(6000)
        cy.get('[data-testid=cripto-select]').should('be.visible').click()
        cy.get('.v-list-item__title').eq(4).click()
        cy.get('[data-testid=current-cripto-title]').should(
            'have.text',
            'cosmos'
        )
    })
})
