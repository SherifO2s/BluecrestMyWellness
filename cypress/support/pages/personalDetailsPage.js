class PersonalDetailsPage {
    elements = {
        getPageTitle: () => cy.get('.left.custom-title-color', { timeout: 10000 }),
    }
}
module.exports = new PersonalDetailsPage();