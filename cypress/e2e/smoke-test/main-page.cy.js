describe('Smoke test of the login page', () => {

    it('check the elements of the login page', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/');
        // Checks if the logo is visible
        cy.get('#divLogo > img').should('be.visible');
        // Checks if the form field for the username is visible
        cy.get('#txtUsername').should('be.visible');    
        // Checks if in the page there is a text that says the version of the system
        cy.get('#footer > :nth-child(1)').contains('OrangeHRM');
        // Checks if is visible the button to submit the form
        cy.get('#btnLogin').should('be.visible');
    })
})