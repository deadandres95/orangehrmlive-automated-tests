describe('Smoke test of the users page', () => {

    beforeEach(() => {
        //open the page
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        // put the username in the field for the username
        cy.get('#txtUsername').type('Admin');
        // fill the password
        cy.get('#txtPassword').type('admin123');
        // click on the button to login
        cy.get('#btnLogin').click();
    })

    it('User - add', () => {
        // click on the admin button to go to the user module
        cy.get('#menu_admin_viewAdminModule').click();
        // Click on the add button
        cy.get('#btnAdd').click();
        // Fill the field employee name
        cy.get('#systemUser_employeeName_empName').type('Peter Mac Anderson');
        // Fill the username field
        cy.get('#systemUser_userName').type('PMAnder');
        // Fill the password field
        cy.get('#systemUser_password').type('W1?W9(gH+:&_.z+8');
        // Confirm the typed password
        cy.get('#systemUser_confirmPassword').type('W1?W9(gH+:&_.z+8');
        // add the user
        cy.get('#btnSave').click();
        // Check if the user is registered
        cy.get('#search-results > .inner').contains('PMAnder');
    })
})