import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import packagePage from "../pages/packagePage";
import venuPage from "../pages/venuPage";
import orderSummaryPage from "../pages/orderSummaryPage";
import personalDetailsPage from "../pages/personalDetailsPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

let selectedPackage, selectedLocation

Given(/^I navigate to the Bluecrest "([^"]*)" page$/, (page) => {
    cy.visit(`/${page}`);
});

When(/^I scroll to the Full Body Health MOTs packages section$/, () => {
    packagePage.elements.getHealthMOTPackagesSection().scrollIntoView();
    packagePage.elements.getAcceptCookiesBtn().click();
});

When(/^I select the "([^"]*)" Health MOTs package$/, (packageName) => {
    selectedPackage = packageName;
    packagePage.elements.getClosePromoAdvertBtn().click();
    packagePage.selectHealthMOTPackage(packageName);
});

When(/^I input my postcode as "([^"]*)"$/, (postCode) => {
    venuPage.elements.getVenueSearchBoxInput()
        .click()
        .type(postCode);
});

When(/^I choose the location "([^"]*)"$/, (location) => {
    cy.contains(location, { timeout: 2000 }).click();
});

When(/^I click on the Search button$/, () => {
    venuPage.elements.getVenueSearchBtn().click();
});

When(/^I select a convenient location, "([^"]*)" and time$/, (location) => {
    selectedLocation = location;
    venuPage.selectPreferredLocation(location);
    venuPage.selectPreferredDayAndTime();
});

When(/^I click on the Confim button on the Venue page$/, () => {
    venuPage.elements.getConfirmBtn().click();
});

When(/^I verify my order summary and click Continue button$/, () => {
    // verify selected Package
    orderSummaryPage.elements.getpackageTxt().invoke('text').then(text => {
        expect(text.trim()).to.equal(`${selectedPackage} Package`);
    });
    // verify selected location 
    orderSummaryPage.elements.getAddressTxt().invoke('text').then(text => {
        expect(text.trim()).to.include(selectedLocation);
    });
    // click the Continue CTA
    orderSummaryPage.elements.getContinueBtn().click();
});

Then(/^I should be presented to the "([^"]*)" screen$/, (pageTitle) => {
    // verify page title text
    personalDetailsPage.elements.getPageTitle().invoke('text').then(text => {
        expect(text.trim()).to.equal(pageTitle);
    });
});
