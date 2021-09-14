/// <reference types="Cypress" />
//for auto suggestions use the above line
describe('Child Window Test Suite1',function(){
    it('Child window Mouse Over1', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //grabbing the href attribute
         cy.get('#opentab').then(function(element){
           const url =  element.prop('href');
           //Cypress wont allow you to switch tp another domain
           cy.visit(url);
         })

        
        })
    })
