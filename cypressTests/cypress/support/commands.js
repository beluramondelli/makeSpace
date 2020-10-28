import {
    homeSections,
} from './selectors/homeSectionSelectors';

Cypress.Commands.add('FillInZipCode', (zip) => {
    cy.get(homeSections.zipCodeText).last().type(zip + '{enter}');
});

Cypress.Commands.add('BooleanSelection', (element, option) => {
    if(option === 'Yes') {
        cy.get(element).first().check({force: true})
    }
    else {
        cy.get(element).last().check({force: true})
    }
});
