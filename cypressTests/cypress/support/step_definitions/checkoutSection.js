import {
    Given,
} from 'cypress-cucumber-preprocessor/steps';
import {
    checkout,
} from '../selectors/checkoutSelectors';

//GIVEN
Given(/^The user enters "([^"]*)" option "([^"]*)"$/, (option, value) => {
    switch (option) {
        case "username":
            cy.get(checkout.usernameInput)
              .type(value);
            break;
        case "email":
            cy.get(checkout.emailInput)
                .type(value);
            break;
        case "phone number":
            cy.get(checkout.phoneNumberInput)
                .type(value);
            break;
        case "Appointment Address":
            cy.get(checkout.appointmentAddressInput)
                .type(value + '{enter}');
            break;
        case "Apt/Unit/Fl":
            cy.get(checkout.aptUnitFlInput)
                .type(value);
            break;
        case "Appointment Date":
            cy.get(checkout.datePicker)
                .type(value + '{enter}');
            break;
        case "Appointment Time":
            cy.get(checkout.timePicker)
                .click();
            cy.wait(10000);
            cy.contains(value).click({ force: true });
            break;
        case "card number":
            cy.get(checkout.cardNumberInput)
                .type(value);
            break;
        case "card Expiration Date":
            cy.get(checkout.expirationDateInput)
                .type(value);
            break;
        case "card Security Code":
            cy.get(checkout.securityCodeInput)
                .type(value);
            break;
        case "Name on Card":
            cy.get(checkout.nameOnCardInput)
                .type(value);
            break;
        default:
            throw new Error(`${option} is not a valid section`);
    }
});
