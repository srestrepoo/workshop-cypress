Cypress.Commands.add("proceedToCheckout", (buttonType = 'default') => { 
    let proceedToTheNextStepButton;
    if(buttonType === 'default'){
        proceedToTheNextStepButton = `.cart_navigation > .button`;
    }

    cy.get(proceedToTheNextStepButton).click()
})