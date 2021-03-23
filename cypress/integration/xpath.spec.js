/// <reference types="cypress" />
describe("Testing xpath", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });
  it("get xpath", () => {
    cy.xpath('//*[@id="email1"]');
  });
});
