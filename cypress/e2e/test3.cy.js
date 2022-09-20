/// <reference types="Cypress" />

beforeEach(() => {
  cy.log('My test suite!')
})

/* Given a user visits https://example.cypress.io
When they click the link labeled type
And they type "fake@email.com" into the .action-email input
Then the URL should include /commands/actions
And the .action-email input has "fake@email.com" as its value */

/* 
Given
When
Then
*/

describe('DuckDuckGo', () => {
  beforeEach(() => {
    cy.visit('http://duckduckgo.com')
  })

  it('searches by typing and pressing ENTER', () => {
    cy.get('#searchbox_input')
      .should('be.visible')
      .type('Cypress.io{enter}')

    cy.get('.results')
      .should('contain', 'cypress.io')
  })

  it('searches by typing and clicking the magnifying glass button', () => {
    cy.get('.toggle_toggle__zDCao > label').click()
    cy.get('#searchbox_input')
      .should('be.visible')
      .type('Cypress.io')
    cy.get('.searchbox_searchButton__F5Bwq')
      .should('be.visible')
      .click()

    cy.get('.results')
      .should('contain', 'cypress.io')
  })
})
