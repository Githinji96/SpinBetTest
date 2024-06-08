const { registration } = require("../support/Utils/access")


import { faker } from '@faker-js/faker'

const username = faker.person.firstName();
  const email = faker.internet.email();
  const num=faker.phone.number();
  const password = faker.internet.password();
  const startDate = new Date(1930, 0, 1);
  const endDate = new Date(2005, 11, 31);
  const randomDate = faker.date.between(startDate, endDate);

  // Extract the day, month, and year
  const day = randomDate.getDate();
  const month = randomDate.getMonth() + 1; // getMonth() returns 0-11, so add 1 to get 1-12
  const year = randomDate.getFullYear();

describe("Test Registration Process",()=>{
    beforeEach(()=>{
      cy.visit('/')  
    })
   
    it('register a new user',()=>{
      cy.SignupBtn(registration.signupbtn)
      cy.EnterUsername(registration.usernamefield,username)
      cy.EnterEmailAddress(registration.emailaddress, email)
      cy.selectCountry(registration.country)
      cy.ChooseCountry(registration.choosecountry)
      cy.SelectCurrency(registration.currency)
      cy.ChooseCurrency(registration.currencyType)
      cy.EnterPassword(registration.password, password)
      cy.EnterDateOfBirth(registration.DOBText, day)
      cy.EnterMonthOfBirth(registration.MOBText, month)
      cy.EnterYearOfBirth(registration.YOBText, year)
      cy.EnterPromoCode(registration.promoCode)
      cy.clickCheckBtn1(registration.checkbtn1)
      cy.clickCheckbtn2(registration.checkbtn2)
      cy.clickRegisterbtn(registration.registerbtn)

     })
})