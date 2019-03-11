Cypress.Commands.add("selectProduct", (productName, numMenu) => { 
    const continueShopping = `[title="Continue shopping"]`;
    const productList = `.product_list`;
    const tShirtMenu = `#block_top_menu > ul > li:nth-child(${numMenu}) > a`;
    // const tShirtMenu = `#block_top_menu > ul > li:nth-child(3) > a`;
 
    cy.get(tShirtMenu)
      .click();
    cy.get(productList)
      .contains(productName)
      .parent().parent()
      .contains('Add to cart').click()
    cy.get(continueShopping).click();
})