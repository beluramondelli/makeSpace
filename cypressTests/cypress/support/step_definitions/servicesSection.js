import {
    Given,
} from 'cypress-cucumber-preprocessor/steps';
import {
    services,
} from '../selectors/servicesSelectors';

//GIVEN
Given(/^The user selects "([^"]*)" for "([^"]*)"$/, (option, service) => {
    cy.get(services[service + 'Button'])
        .first()
        .click({force: true})
});
