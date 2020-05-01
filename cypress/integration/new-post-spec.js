/// <reference types="Cypress"/>

describe('New Post on Conduit', () => {

    // adding a hook that runs before the test
    beforeEach(() => {
        cy.task('cleanDatabase')
        cy.registerUserIfNeeded() 
        cy.login()

        // define aliases - Remember not to create aliases when you are deep in the chain
        cy.get('[data-cy=new-post]').click().as('ClickOnNewPost')
        cy.get('[data-cy=title]').as('Title')
        cy.get('[data-cy=about]').as('About')
        cy.get('[data-cy=tags]').as('Tags')
        cy.get('[data-cy=article]').as('Article')
        cy.get('[data-cy=publish]').as('Publish')
    })

    it('write a new post', () => {
        
        // Fill details to write a new post
        cy.get('@ClickOnNewPost')
        cy.get('@Title').type('My New Post')
        cy.get('@About').type('This is my new post, and I am quite excited to write it')
        cy.get('@Article').type('Here is my lengthy article .....')
        cy.get('@Tags').type('test{enter}')
        cy.get('@Publish').click()

        // assertion to check url
        cy.location('pathname').should('equal', '/article/my-new-post')
    });

    it('edit article', () => {

         // Fill details to write a new post
         cy.get('@ClickOnNewPost')
         cy.get('@Title').type('My New Post')
         cy.get('@About').type('This is my new post, and I am quite excited to write it')
         cy.get('@Article').type('Here is my lengthy article .....')
         cy.get('@Tags').type('test{enter}')
         cy.get('@Publish').click()
 

         // assertion to check url
         cy.location('pathname').should('equal', '/article/my-new-post')

         // editing the article
         cy.get('[data-cy=edit-article]').click()
         cy.location('pathname').should('equal', '/editor/my-new-post')

         cy.get('@Title').clear().type('My Edited Title')
         cy.get('@About').clear().type('New About information')
         cy.get('@Tags').clear().type('MyNewTag{enter}')

         cy.get('@Publish').click()
         cy.location('pathname').should('equal', '/article/my-edited-title')
        
    });

    it('favorite an article test', () => {
        
        // Fill details to write a new post
        cy.get('@ClickOnNewPost')
        cy.get('@Title').type('My New Post')
        cy.get('@About').type('This is my new post, and I am quite excited to write it')
        cy.get('@Article').type('Here is my lengthy article .....')
        cy.get('@Tags').type('test{enter}')
        cy.get('@Publish').click()

        // assertion to check url
        cy.location('pathname').should('equal', '/article/my-new-post')

        cy.get('[data-cy=profile]').click()
        cy.location('pathname').should('equal', '/@testuser')

        // favorite the aritcle
        cy.get('.article-preview').should('have.length', 1)
            .first().find('[data-cy=fav-article]').click()

        // Validate that it is in the fav articles tab
        cy.get('[data-cy=favorited-articles]').click()
        cy.contains('.article-preview', 'My New Post')
    });

    it('Write article through server request', () => {
        
        cy.postArticle({
            title: 'first post',
            description: 'first description',
            body: 'first article',
            tagList: ['first', 'testing']
          })

        // assertion to check article was published
        cy.get('[data-cy=profile]').click()
        cy.location('pathname').should('equal', '/@testuser')
        cy.get('.article-preview').should('have.length', 1)
        cy.contains('.article-preview', 'first post')
    });
})