/// <reference types="Cypress" />
//for auto suggestions use the above line
describe('Child Window Test Suite',function(){
    it('Child window Mouse Over', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
         
        //cy.get('.mouse-hover-content').invoke('show');
        //inorder to click on hidden elements use force true
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');

        
        })
    })
