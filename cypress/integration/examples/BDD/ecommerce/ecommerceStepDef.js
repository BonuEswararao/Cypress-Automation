import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
/// <reference types="Cypress" />
//for auto suggestions use the above line
import HomePage from '../../../../support/pageObjects/HomePage';
import ProductPage from '../../../../support/pageObjects/ProductPage';

const homePage = new HomePage();
const productPage = new ProductPage();
let name;
Given('I Open Ecommerce page', ()=>{
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
})

//Use function here as mocha wont support
When('i add items to cart',function(){

    homePage.getShopPage().click();
    this.dataExample.productName.forEach(function(element){
        cy.selectProduct(element);
    })
    productPage.checkoutButton().click();
})

And('validate the total prices',()=>{
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
})

Then('select the country and verify Thankyou',()=>{
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

When('i fill the form details', function(dataTable){
    name = dataTable.rawTable[1][0];
    homePage.getFirstName().type(this.dataTable.rawTable[1][0]);
        homePage.getGender().select(this.dataTable.rawTable[1][1]);
})

Then('validate the forms behaviour',()=>{
    homePage.getTwoWayDataBinding().should('have.value',name);
    //two way data binding
    homePage.getTwoWayDataBinding().should('have.value',name)
    //Attribute value
    //cy.get('input[name="name"]:nth-child(1)').should('have.attr','minlength','2')
    homePage.getDisabledButton().should('be.disabled')
})

And('select the shop page',()=>{
    homePage.getShopPage().click();
})