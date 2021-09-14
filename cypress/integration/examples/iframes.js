/// <reference types="Cypress" />
//for auto suggestions use the above line
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('Iframe Test Suite1',function(){
    it('iframe Test Case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find("a[herf='mentorship']").eq(0).click();



        
        })
    })
