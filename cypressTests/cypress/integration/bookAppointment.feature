Feature: Book an appointment

  Scenario: Booking an Appointment
    Given The user is on make space home page
    And The user completes "Enter zip code" with "10038"
    And The user presses "Select Plan" button of "2" option
    And The user enters the amount of bins "4"
    And The user presses "Continue with 5'x5'" button
    And The user presses "Got it!" button
    And The user selects "Yes" for "largeItems"
    And The user selects "Yes" for "bulkyItems"
    And The user selects "Yes" for "walkUpItems"
    And The user selects "Yes" for "fragileItems"
    And The user selects "Yes" for "disassemblyItems"
    And The user presses "Continue" button
    And The user enters "username" option "Juan perez"
    And The user enters "phone number" option "1234567890"
    And The user enters "email" option "juan@gmail.com"
    And The user selects "No" radio button
    And The user presses "Continue" button
    And The user enters "Appointment Address" option "123 William Street, Nueva York, EE. UU."
    And The user enters "Apt/Unit/Fl" option "22"
    And The user selects "Same as appointment address" checkbox
    And The user presses "Confirm and continue" button

    And The user enters "Appointment Date" option "11/24/2020"
    And The user enters "Appointment Time" option "8am-11am"
    And The user presses "Confirm and continue" button

    And The user enters "card number" option "4111111111111111"
    And The user enters "card Expiration Date" option "2/22"
    And The user enters "card Security Code" option "222"
    And The user enters "Name on Card" option "Juan Perez"
    And The user selects "Same as appointment address" checkbox
    And The user selects "I have read and agree to the MakeSpace Terms of Service." checkbox
    When The user presses "Confirm and book my appointment" button
    # Then The user is redirected to the confirmation page

