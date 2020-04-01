/// <reference-types = "Cypress" />

describe('login test suite', () => {
    it('does not work with wrong credentials', () => {
        cy.visit('http://localhost:4100')
        cy.get('[data-cy=sign-in]').click()

        cy.location('pathname').should('equal', '/login')
        cy.get('[data-cy=username]').as('username').type('info')
        cy.get('[data-cy=password]').type('visitor')
        cy.get('[data-cy=login-form]').submit()

        cy.contains('.error-messages li', 'email must be a valid email')
        
        cy.location('pathname').should('equal', '/login')
    
    });

    it('happy path test', () => {
        cy.visit('http://localhost:4100')
        cy.get('[data-cy=sign-in]').click()
        cy.location('pathname').should('equal', '/login')

        cy.get('@username').type('visitor@adshithiravichandran.com')
        cy.get('[data-cy=password]').type('visiting')
        cy.get('[data-cy=login-form').submit()

        cy.get('[data-cy=profile]').should('be.visible')
        cy.location('pathname').should('equal', '/')

        cy.get('[data-cy=your-feed]')
        cy.contains('a.nav-link', 'Your Feed').should('have.class', 'nav-link active')
        cy.get('[data-cy=global-feed]').click()
        cy.contains('a.nav-link', 'Global Feed').should('have.class', 'nav-link active')
        cy.contains('a.nav-link', 'Your Feed').should('not.have.class', 'nav-link active')
       
    });
   
} )