/// <reference types="Cypress" />
//for auto suggestions use the above line
describe('Alerts Test Suite',function(){
    it('Alerts Test Case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();
        //window:alert
        cy.on('window:alert',(string)=>{
            expect(string).to.equal('Hello , share this practice page and share your knowledge');
        })

        cy.on('window:confirm',(string)=>{
            expect(string).to.equal('Hello , Are you sure you want to confirm?');
        })

        //Handling child tabs in Cypress
        cy.get('#opentab').invoke('removeAttr','target').click();
        //validating the url
        cy.url().should('include','rahulshettyacademy');
        //navigation control
        cy.go('back');

        
        })
    })
