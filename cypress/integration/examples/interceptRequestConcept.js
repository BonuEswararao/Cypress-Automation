/// <reference types="Cypress" />
//for auto suggestions use the above line
describe('Cypress Intercept Test Suite',function(){
    it('Intercept Test Case', function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (request)=>{
            request.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Eswar'
            request.continue((req)=>{
                expect(req.statusCode).to.equal(404);
            })
        }).as('dummyUrl')

        cy.get("button[class='btn btn-primary']").click();
        cy.wait('@dummyUrl')

    })
})
