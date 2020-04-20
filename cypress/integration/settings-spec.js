/// <reference types="Cypress"/>

describe('Settings on Conduit', () => {

    // adding a hook that runs before the test
    beforeEach(() => {
        cy.task('cleanDatabase')
        cy.registerUserIfNeeded() 
        cy.login()
    })

    it('settings happy flow', () => {
        cy.get('[data-cy=profile]').click()
        cy.get('[data-cy=edit-profile-settings').click()
        cy.get('[data-cy=username]').clear().type('Updated User Name')
        cy.get('[data-cy=bio]').clear().type('Here is my new lengthy bio')
        cy.get('form').submit()
    });

    it('settings logout', () => {
        cy.get('[data-cy=profile]').click()
        cy.get('[data-cy=edit-profile-settings').click()
        cy.get('[data-cy=logout]').click()
    });
})