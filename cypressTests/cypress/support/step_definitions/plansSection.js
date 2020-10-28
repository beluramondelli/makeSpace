import {
    Given,
} from 'cypress-cucumber-preprocessor/steps';
import {
    plans,
} from '../selectors/plansSelectors';

// GIVEN
Given(/^The user presses "([^"]*)" button of "([^"]*)" option$/, (buttonText, serviceOption) => {
    cy.get(plans.planButton)
        .eq(serviceOption)
        .click({force: true})

});

Given(/^The user enters the amount of bins "([^"]*)"$/, (binsAmount) => {
    cy.get(plans.binsInput)
      .type(binsAmount)
});
