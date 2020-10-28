import {
    Given,
} from 'cypress-cucumber-preprocessor/steps';

const url = 'https://dev.mksp.co/';
// GIVEN
Given(/^The user is on make space home page$/, () => {
    cy.visit(url);
});

Given(/^The user completes "([^"]*)" with "([^"]*)"$/, (option, zipCode) => {
    cy.FillInZipCode(zipCode)
});
