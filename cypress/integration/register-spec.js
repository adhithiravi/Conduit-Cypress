/// <reference types="Cypress" />

describe('Register', () => {

    beforeEach(() => {
        cy.task('cleanDatabase')
        cy.visit('/')
        // we are not logged in
    })

    it('register a new user', () => {
        const username = 'info'
        const email = 'visitor@adhithiravichandran.com'
        const password = 'visiting'

        cy.visit('http://localhost:4100')
        cy.contains('a.nav-link', 'Sign up').click()
        cy.location('pathname').should('equal', '/register')

        cy.screenshot('register/screenshot1')

        cy.get('[data-cy=username]').type(username)
        cy.get('[data-cy=email]').type(email)
        cy.get('[data-cy=password]').type(password)
        cy.get('form').submit()

        cy.screenshot('register/screenshot2')

        cy.location('pathname').should('equal', '/')
        cy.get('[data-cy=profile]').should('be.visible')

        cy.contains('a.nav-link', 'Your Feed').as('YourFeedPresent').should('have.class', 'nav-link active')
        cy.contains('a.nav-link', 'Global Feed').as('GlobalFeedPresent').should('not.have.class', 'nav-link active')

        cy.get('@GlobalFeedPresent').click()
        cy.get('@GlobalFeedPresent').should('have.class', 'nav-link active')    
        
    }); 
})