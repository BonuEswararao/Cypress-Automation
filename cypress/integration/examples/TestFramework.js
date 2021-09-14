/// <reference types="Cypress" />
//for auto suggestions use the above line
import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from '../../support/pageObjects/ProductPage';
describe('Cypress TestFramework',function(){

    before(() => {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.dataExample = data;
        })
      })
    it('Angular App', function(){
        const homePage = new HomePage();
        const productPage = new ProductPage();
        //cy.visit(Cypress.env('url'));
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homePage.getFirstName().type(this.dataExample.name);
        homePage.getGender().select(this.dataExample.gender);
        homePage.getTwoWayDataBinding().should('have.value',this.dataExample.name);
        //two way data binding
        homePage.getTwoWayDataBinding().should('have.value',this.dataExample.name)
        //Attribute value
        //cy.get('input[name="name"]:nth-child(1)').should('have.attr','minlength','2')
        homePage.getDisabledButton().should('be.disabled')
        //for Debugging use pause - even we can use debug method
        //cy.pause();
        //navigate to Shop page
        homePage.getShopPage().click();
        this.dataExample.productName.forEach(function(element){
            cy.selectProduct(element);
        })

        productPage.checkoutButton().click();
        var totalAmount = 0;
        cy.get('tr td:nth-child(4) strong').each((element,index,list)=>{
            cy.log(element.text());  
            const amount = element.text();
            var res = amount.split(" ");
            res = res[1].trim();
            //var intConversion = parseInt(res);
            totalAmount = Number(totalAmount)+Number(res);
            
        }).then(function(){
            cy.log(totalAmount);
        })
        cy.get('h3 strong').then(function(element){
            const amount = element.text();
            var res = amount.split(" ");
            var total = res[1].trim();
            expect(Number(total)).to.equal(totalAmount);
        })
        
        productPage.nextCheckOutBtn().click();
        productPage.textBox().type('India');
        Cypress.config('defaultCommandTimeout',8000);// applicable to this spec file only. over ridding existing timeut of 4000
        productPage.selectIndia().click();
        productPage.checkBox().check({force:true});
        productPage.purchaseBtn().click();
       //productPage.textValidation().should('have.text',this.dataExample.orderPlacedText)
        productPage.textValidation().then(function(element){
            const actualText = element.text();
            actualText.includes('Success');
        })
        })
    })
