const { search } = require("../support/Utils/access")

describe("Validate Search Functionality",()=>{
  
        it("Tc-02-Test Search options",()=>{
           cy.visit('https://www.spinbet.com/casino')
           cy.ClickCasinoGames(search.search_btn)
           cy.searchCasinoGames(search.typeSearch)
           cy.ClickSearch(search.clicksearch)
           cy.getText(search.gettext)
        
        })
})
