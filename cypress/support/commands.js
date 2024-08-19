// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const texts = "Golden Dragon InfernoPlay NowDemoSpinzaEl DoradoPlay NowDemoSpinzaLaughing Buddha: Hold and WinPlay NowDemoSpinzaShogun's TowerPlay NowDemoSpinzaGolden Gunslinger: Hold and WinPlay NowDemoSpinzaGolden Dragon: Multi Hold and WinPlay NowDemoSpinzaCrystal CrushersPlay NowDemoSpinzaPirate PetePlay NowDemoSpinzaHalls of ValhallaPlay NowDemoSpinzaTemple Of FortunaPlay NowDemoSpinzaFruity Bombers: Beat the BombPlay NowDemoSpinza"
Cypress.Commands.add('SignupBtn', (selector) => {
    cy.get(selector)
        //.should('be.visible')
        .click()
})
Cypress.Commands.add('EnterUsername', (selector,username) => {
    cy.get(selector)
        .type(username)
})
Cypress.Commands.add('EnterEmailAddress', (selector,email) => {
    cy.get(selector)
        .type(email)
})
Cypress.Commands.add('selectCountry', (selector) => {
    cy.get(selector)
        .click({force:true})
})
Cypress.Commands.add('ChooseCountry', (selector) => {
    cy.get(selector)
        .click()
})
Cypress.Commands.add('SelectCurrency', (selector) => {
    cy.get(selector)
        .click({force:true})
})
Cypress.Commands.add('ChooseCurrency', (selector) => {
    cy.get(selector)
        .click()
})
Cypress.Commands.add('EnterPassword', (selector, password) => {
    cy.get(selector)
        .type(password)
})
Cypress.Commands.add('EnterDateOfBirth', (selector,chooseday) => {
    cy.get(selector)
        .type(chooseday)
})
Cypress.Commands.add('EnterMonthOfBirth', (selector, choosemonth) => {
    cy.get(selector)
        .type(choosemonth)
})
Cypress.Commands.add('EnterYearOfBirth', (selector, chooseYear) => {
    cy.get(selector)
        .type(chooseYear)
})
Cypress.Commands.add('EnterPhoneNumber', (selector,contact) => {
    cy.get(selector)
        .type(contact)
})
Cypress.Commands.add('EnterPromoCode', (selector) => {
    cy.get(selector)
        .type('86548978900987')
})
Cypress.Commands.add('clickCheckBtn1', (selector) => {
    cy.get(selector)
        .should('be.visible')
        .click()
})
Cypress.Commands.add('clickCheckbtn2', (selector) => {
    cy.get(selector)
        .should('be.visible')
        .click()
})
Cypress.Commands.add('clickRegisterbtn', (selector) => {
    cy.get(selector)
        .should('be.visible')
        .click()
})
Cypress.Commands.add('clickRegisterbtn', (selector) => {
    cy.get(selector)
        .should('be.visible')
        .click()
})
// search casino games

Cypress.Commands.add('clickSearch', (selector) => {
    cy.get(selector)
    .click()
})
Cypress.Commands.add('typeSearch', (selector) => {
    cy.get(selector)
    .should('be.visible')
    .type("spinbet princess")
})
Cypress.Commands.add('verifyGameSearch', (selector) => {
    cy.get(selector). then((elem) => {
                // Get the alt attribute  to compare
                const altText = elem.attr('alt'); 
                cy.log(altText);
              
                // Assert that the alt text is equal to "princess win"
                expect(altText).to.equal('Play SpinBet Princess | Spinbet Casino');
              });
            })

