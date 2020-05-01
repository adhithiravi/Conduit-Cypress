/// <reference types="Cypress" />

describe ('Register Tests', () => {

    it('register new user', () => {
        const username = 'adhithi'
        const email = 'info@adhithiravichandran.com'
        const password = 'iamvisiting'

        cy.visit('http://localhost:4100')
        cy.contains('a.nav-link', 'Sign up').click()
        cy.location('pathname').should('equal', '/register')
        cy.get('[data-cy=username]').type(username)
        cy.get('[data-cy=email]').type(email)
        cy.get('[data-cy=password]').type(password)
        cy.get('form').submit()

        cy.contains('[data-cy=profile]', username).should('be.visible')

    });
})


