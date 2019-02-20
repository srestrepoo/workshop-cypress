export default class ProductListPage{
    constructor(){
        this.productList = `.product_list`;
        this.addToCarButton = `.ajax_add_to_cart_button.btn.btn-default`
    }
    selectProduct = function(productName){
        cy.get(this.productList)
          .contains(productName)
          .parent().parent()
          .contains('Add to cart').click()
    }
}