Cypress.Commands.add("paymentProcess", () => { 


    const email = `aperdomobo@gmail.com`;
    const password = `WorkshopProtractor`;

    const paybyBankWireButton = `a[title="Pay by bank wire"]`;
    const proceedProductAddedModal = `a[title="Proceed to checkout"]`;
    const proceedToCheckout = `.cart_navigation a[title="Proceed to checkout"]`;
    const processAddress = `[name="processAddress"]`;
    const processCarrier = `[name="processCarrier"]`;
    const terms = `#cgv`;


    // proceed to pay products in car shop
    cy.get(proceedProductAddedModal).click();
    // Check product's summary
    cy.get(proceedToCheckout).click();
    // Log in user
    cy.login(email,password);
    // Confirm address
    cy.get(processAddress).click();
    // select shipping and accept terms of service
    cy.get(terms).check().should('be.checked')
    cy.get(processCarrier).click();
    // select pay method
    cy.get(paybyBankWireButton).click()
    // confirm payment
    cy.proceedToCheckout();
})