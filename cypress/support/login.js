Cypress.Commands.add("login", (email, password) => { 
    const emailSelector = `#email`;
    const passwordSelector = `#passwd`;
    const submitLoginButton = `#SubmitLogin`;

    cy.get(emailSelector).type(email)
      .get(passwordSelector).type(password)
      .get(submitLoginButton).click()
 })