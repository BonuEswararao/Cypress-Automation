/// <reference types="Cypress" />
//for auto suggestions use the above line
describe('Sample Test Suite',function(){
    it('Sample Test Case', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.get('.product:visible').should('have.length',4);
        //paremt child chaining
        cy.get('.products').find('.product').should('have.length',4);
        //selecting the 2nd product
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        //adding the products dynamically
        cy.get('.products').find('.product').each(($el,index,$list) =>{

            const vegText = $el.find('h4.product-name').text();
            if(vegText.includes('Cashews'))
            {
                $el.find('button').click();
            }
        })
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.get(':nth-child(14)').click();

        
        })
    })
