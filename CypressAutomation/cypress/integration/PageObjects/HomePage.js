class HomePage{
    getEditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding(){
        return cy.get(':nth-child(1) > .form-control')
    }

    getGender(){
        return cy.get('#exampleFormControlSelect1')
    }

    getEntrepreneurButton(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage;