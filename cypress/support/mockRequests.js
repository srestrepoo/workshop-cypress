Cypress.Commands.add("mockIndexReq", () => { 
    cy.server()           // enable response stubbing

    cy.route({
        method: 'POST',      // Route all POST requests
        url: '/index.php?rand=**',    // that have a URL that matches '/*'
        response: {"products":[{"id":1,"link":"http:\/\/automationpractice.com\/index.php?id_product=1&controller=product#\/size-s\/color-orange","quantity":1,"image":"http:\/\/automationpractice.com\/img\/p\/1\/1-home_default.jpg","image_cart":"http:\/\/automationpractice.com\/img\/p\/1\/1-cart_default.jpg","priceByLine":"$16.51","name":"Faded Short Sleeve T-shirts","price":"$16.51","price_float":16.51,"idCombination":1,"idAddressDelivery":0,"is_gift":false,"hasAttributes":true,"attributes":"Orange, S","hasCustomizedDatas":false,"customizedDatas":[]}],"discounts":[],"shippingCost":"$2.00","shippingCostFloat":2,"wrappingCost":"$0.00","nbTotalProducts":1,"total":"$18.51","productTotal":"$16.51","freeShipping":"$0.00","freeShippingFloat":0,"hasError":false,"crossSelling":""},
        headers:{
            'Set-Cookie':'PrestaShop-a30a9934ef476d11b6cc3c983616e364=9zTHxCGngbzlan2NGoxnw58jRrRJLhh7FMepCfow9zuuVGa61504FBDvu5sOuHUr7d97yINe6lVNz3rLvYkF%2BAse0qyGVZifFs2i6xZch5r%2FQWj7urgYkShA%2BAmWDvioE1pThsc1yYLxYJkIj1sh9LjBScu%2BMOohIZ%2B4ib02l0iellYOrfMnzEKqk8fLO1xQ8kk0QeZdzJxCXXT2zAjKagjD3NA9ijdCfxxqYqNGKH0%3D000170; expires=Sun, 31-Mar-2019 13:40:52 GMT; path=/; domain=automationpractice.com; httponly'
        }
    });
})