/// <re
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am in sauce demo website", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("I fill in the form", () => {
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').should("not.be.disabled").click();
});

Then("I am successfully connected", () => {
  cy.url().then((url) => {
    expect(url).eq("https://www.saucedemo.com/inventory.html");
    expect(url).include("inventory.html");
    expect(url).contain("inventory");
  });
  cy.get(".inventory_item").then((products) => {
    expect(products).to.have.length(6);
    expect(products).lengthOf(6);
  });
});
