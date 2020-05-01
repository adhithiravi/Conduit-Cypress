/// <reference types="Cypress" />

describe('comments', () => {
    beforeEach(() => {
      cy.task('cleanDatabase')
      cy.registerUserIfNeeded()
      cy.login()
    })
  
    // article object
    const article = {
      title: 'My New Article',
      description: 'About a topic',
      body: 'This is a new post',
      tagList: ['test']
    }

    it('Test post comments with stubbed response', () => {
        
        cy.writeArticleAndPostComment(article)
        cy.contains('[data-cy=comment]', 'great post 👍').should('be.visible')
    });

    it('Test post comment waiting for server response', () => {

        cy.postArticle(article)
        cy.postComment('my-new-article', 'my new comment')

        cy.visit('http://localhost:4100/article/my-new-article')
        cy.contains('[data-cy=comment]', 'my new comment').should('be.visible')
    });
})