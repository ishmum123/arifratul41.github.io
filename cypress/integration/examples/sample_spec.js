describe('My First Test', () => {
  it('clicking "type" shows the right headings', () => {
    // cy.visit('https://example.cypress.io')
    cy.visit('/index.html')

    cy.get('#distance')
        .type("100")
    cy.get("#distanceUnits")
        .select('km')
    cy.get('#fuelUsed')
        .type("10")
    cy.get("#fuelUnits")
        .select('litres')
    cy.get('#priceOfFuel')
        .type("100")
    cy.get("#fuelPriceUnits")
        .select('litres')
    cy.contains("Calculate")
        .click()
    cy.get("#USFuelEfficiency")
        .should('include.text', '23.52')
})
})
