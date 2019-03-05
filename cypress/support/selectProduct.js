Cypress.Commands.add("selectProduct", (productName) => { 
    const productList = `.product_list`;
    const tShirtMenu = `.menu-content > li:nth-child(3) a`
    // const tShirtMenu = `#block_top_menu > ul > li:nth-child(3) > a`;
 
    cy.get(tShirtMenu)
      .click();
    cy.get(productList)
      .contains(productName)
      .parent().parent()
      .contains('Add to cart').click()
})