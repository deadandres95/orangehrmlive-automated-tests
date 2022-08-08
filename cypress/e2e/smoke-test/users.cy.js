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
        // click on the admin button to go to the user module
        cy.get('#menu_admin_viewAdminModule').click();
    })

    //Smoke test for the feature add user
    it('User - add', () => {
        //variables to use
        let newUser = 'PMAnder';
        let password = 'W1?W9(gH+:&_.z+8';
        // Click on the add button
        cy.get('#btnAdd').click();
        // Fill the field employee name
        cy.get('#systemUser_employeeName_empName').type('Peter Mac Anderson');
        // Fill the username field
        cy.get('#systemUser_userName').type(newUser);
        // Fill the password field
        cy.get('#systemUser_password').type(password);
        // Confirm the typed password
        cy.get('#systemUser_confirmPassword').type(password);
        // add the user
        cy.get('#btnSave').click();
        // Check if the user is registered
        cy.get('#search-results > .inner').contains(newUser);
    })
})