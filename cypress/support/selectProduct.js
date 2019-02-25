Cypress.Commands.add("selectProduct", (productName) => { 
    const tShirtMenu = `#block_top_menu > ul > li:nth-child(2) > a`;
    const productList = `.product_list`;

    cy.get(tShirtMenu)
      .click();
    cy.get(productList)
      .contains(productName)
      .parent().parent()
      .contains('Add to cart').click()
})