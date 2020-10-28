import {
    Given,
} from 'cypress-cucumber-preprocessor/steps';
import {homeSections} from "../selectors/homeSectionSelectors";

const url = 'https://dev.mksp.co/';
// GIVEN
Given(/^The user is on make space home page$/, () => {
    cy.visit(url);
    cy.get(homeSections.mainMenu)
        .should('be.visible');
});

Given(/^The user completes "([^"]*)" with "([^"]*)"$/, (option, zipCode) => {
    cy.FillInZipCode(zipCode)
});
