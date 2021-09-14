class HomePage {
    getFirstName() {
        return cy.get('input[name="name"]:nth-child(1)');
    }

    getGender() {
        return cy.get('select');
    }

    getDisabledButton() {
        return cy.get('#inlineRadio3');
    }

    getShopPage(){
        return cy.get(':nth-child(2) > .nav-link');
    }

    getTwoWayDataBinding(){
        return cy.get(':nth-child(4) > .ng-valid');
    }
}

export default HomePage;