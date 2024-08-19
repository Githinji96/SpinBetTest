const { search } = require("../support/Utils/access")

describe("Validate Search Functionality",()=>{
  
        it("Tc-02-Test Search options",()=>{
           cy.viewport(1400, 800)
           cy.visit('https://www.spinbet.com/casino')
        
           cy.clickSearch(search.search_btn)
           cy.typeSearch(search.typeSearch)
           cy.verifyGameSearch(search.textSearch)
       
      })              
})
