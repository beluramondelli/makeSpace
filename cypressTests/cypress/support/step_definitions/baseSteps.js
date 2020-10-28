import {
    Given,
} from 'cypress-cucumber-preprocessor/steps';
import {
    baseSelectors,
} from '../selectors/baseSelectors';

//GIVEN
Given(/^The user presses "([^"]*)" button$/, (buttonText) => {
    cy.contains(buttonText)
        .click()
});

Given(/^The user selects "([^"]*)" radio button$/, (value) => {
    cy.BooleanSelection(baseSelectors.genericRadioButton, value)
});

Given(/^The user selects "([^"]*)" checkbox$/, (value) => {
    cy.get(baseSelectors.genericCheckbox)
        .check({force: true})
});
