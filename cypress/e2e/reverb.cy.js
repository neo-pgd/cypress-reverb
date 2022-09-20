/// <reference types="Cypress" />

beforeEach(() => {
  cy.log('Felipe Cypress TestSuite')
})

/* 
Given
When
Then
*/

describe('DuckDuckGo', () => {
  beforeEach(() => {
    cy.visit('http://reverb.com')
  })

  it('Subscribe email to newsletter', () => {
    cy.get('.homepage-marketing-callout__content > .newsletter-signup > form > .input-group > .input-group__input')
      .type("test@gmail.com")
      
    cy.get('.homepage-marketing-callout__content > .newsletter-signup > form > .input-group > .input-group__button')
      .click()

    cy.get('.scaling-mb-7 > .homepage-marketing-callout > .homepage-marketing-callout__container > .homepage-marketing-callout__content')
      .should('include.text', 'Thanks for signing up!Stay tuned for the latest from Reverb.')
  })

  it('Search for a fender', () => {
    cy.get('.site-search__controls__input')
      .type('fender stratocaster')

    cy.get('.site-search__controls__submit')
      .click()
      
  })

  it('Open chat', () => {
    cy.get('.chat-widget__button')
      .click()

    cy.get('#ada-chat-frame')
      .should('be.visible')
  })
})
