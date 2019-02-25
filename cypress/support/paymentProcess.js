Cypress.Commands.add("paymentProcess", () => { 
    const email = `aperdomobo@gmail.com`;
    const password = `WorkshopProtractor`;
    const proceedProductAddedModal = `[style*="display: block;"] .button-container > a`;
    const paybyBankWireButton = `#HOOK_PAYMENT > div:nth-child(1) > div > p > a`;
    const terms = `#cgv`;


    // proceed to pay products in car shop
    cy.get(proceedProductAddedModal).click()
    // Check product's summary
    cy.proceedToCheckout();
    // Log in user
    cy.login(email,password);
    // Confirm address
    cy.proceedToCheckout();
    // select shipping and accept terms of service
    cy.get(terms).check().should('be.checked')
    cy.proceedToCheckout();
    // select pay method
    cy.get(paybyBankWireButton).click()
    // confirm payment
    cy.proceedToCheckout();
})