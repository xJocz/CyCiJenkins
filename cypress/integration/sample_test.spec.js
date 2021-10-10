///<reference types = "cypress"/>

describe('Common usage tests to integrate with Jenkins', () => {
    const main_page = "http://automationpractice.com/index.php"

    beforeEach(() => {
        cy.visit(main_page)
    });
    
    it('Should validate the title', () => {
        cy.title().should('contain', 'My Store')
    });

    it('Should send a support message', () => {
        cy.get('#contact-link > a').click()
        cy.get('#id_contact').select('Webmaster')
        cy.get('#email').type('mail.test@test.ts')
        cy.get('#id_order').type('12355')
        cy.get('#message').type('A commom message only to perform tests')
        cy.get('#submitMessage > span').click()
        cy.get('.alert').should('have.text', 'Your message has been successfully sent to our team.')
    });

    it('Should fail to authenticate', () => {
        cy.get('.login').click()
        cy.get('#email').type('test@test.ts')
        cy.get('#passwd').type('qwerty123456789')
        cy.get('#SubmitLogin > span').click()
        cy.get('ol > li').should('have.text', 'Authentication failed.')
    });

})