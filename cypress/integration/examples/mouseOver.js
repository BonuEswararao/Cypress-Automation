/// <reference types="Cypress" />
//for auto suggestions use the above line
describe('Mouse over Test Suite',function(){
    it('Mouse Over Test case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
         
        //cy.get('.mouse-hover-content').invoke('show');
        //inorder to click on hidden elements use force true
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');

        
        })
    })
