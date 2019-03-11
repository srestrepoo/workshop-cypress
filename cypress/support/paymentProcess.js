Cypress.Commands.add("paymentProcess", (numProducts, productsPrice, ...productList) => { 


    const email = `aperdomobo@gmail.com`;
    const password = `WorkshopProtractor`;

    const checkout = `[title="Check out"]`;
    const paybyBankWireButton = `a[title="Pay by bank wire"]`;
    const proceedToCheckout = `.cart_navigation a[title="Proceed to checkout"]`;
    const processAddress = `[name="processAddress"]`;
    const processCarrier = `[name="processCarrier"]`;
    const submit = `.cart_navigation > .button`;
    const summaryProductName = `.cart_description .product-name`;
    const terms = `#cgv`;
    const summaryTable = `tbody`;
    const totalPrice = `#total_price`;

    // proceed to pay products in car shop
    cy.get(checkout).click({ force: true });
    // Check product's summary
    for(let product of productList){
      cy.get(summaryProductName)
      .should('contain',product)
    }
    cy.get(totalPrice)
      .should('contain',productsPrice)
      .get(summaryTable)
      .children()
      .should('have.length', numProducts)
    cy.get(proceedToCheckout).click();
    // Log in user
    cy.login(email,password);
    // Confirm address
    cy.get(processAddress).click();
    // select shipping and accept terms of service
    cy.get(terms).check().should('be.checked');
    cy.get(processCarrier).click();
    // select pay method
    cy.get(paybyBankWireButton).click();
    // confirm payment
    cy.get(submit).click();
})