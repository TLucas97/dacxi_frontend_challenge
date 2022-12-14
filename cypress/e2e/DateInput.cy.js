describe('DateInput', () => {
    it('should have a date input', () => {
        cy.visit('/')
        // ** Inserts the date and time to be used in the test with a 6 seconds interval to prevent API errors **
        cy.get('[data-testid=progress-bar]').should('be.visible')
        cy.get('[data-testid=date-input]').should('be.visible').click()
        cy.get('[data-testid=date-input]').type('2022-05-15')
        cy.get('[data-testid=hour-input]').should('be.visible').click()
        cy.get('[data-testid=hour-input]').type('12:00')
        cy.get('[data-testid=submit-date-button]')
            .should('have.text', 'Filter')
            .click()
        cy.wait(6000)
        cy.get('p').should('have.text', 'Closest available price')
        cy.get('[data-testid=date-input]').should('be.disabled')
        cy.get('[data-testid=hour-input]').should('be.disabled')
        cy.get('[data-testid=submit-date-button]')
            .should('have.text', 'Clear filters')
            .click()
        cy.get('[data-testid=date-input]').should('not.be.disabled')
        cy.get('[data-testid=hour-input]').should('not.be.disabled')
        cy.get('[data-testid=progress-bar]').should('be.visible')
    })
})
