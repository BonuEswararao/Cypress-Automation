class ProductPage{
    checkoutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }

    nextCheckOutBtn(){
        return cy.get(':nth-child(4) > :nth-child(5) > .btn');
    }

    textBox(){
        return cy.get('#country');
    }

    selectIndia(){
        return cy.get('.suggestions > ul > li > a');
    }

    checkBox(){
        return cy.get('#checkbox2');
    }

    purchaseBtn(){
        return cy.get('input[class="btn btn-success btn-lg"]');
    }

    textValidation(){
        return cy.get('.alert');
    }
}
export default ProductPage;