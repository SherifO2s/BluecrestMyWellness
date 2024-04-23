class PackagesPage {
    elements = {
        getHealthMOTPackagesSection: () => cy.get('[class="packages-block_packagesList__cl01q "]').eq(0, { timeout: 10000 }),
        getVenueSearchBoxInput: () => cy.get('.venue-search-box>span', { timeout: 6000 }),
        getClosePromoAdvertBtn: () => cy.get('.Campaign__innerWrapper>button', { timeout: 20000 }),
        getAcceptCookiesBtn: () => cy.contains('I Accept', { timeout: 25000 }),
    }

    selectHealthMOTPackage(packageName) {
        cy.get('[class="package-card_header__jD_iJ"]>h3').each(($el, index, $list) => {
            const optionText = $el.text().trim();
            if (optionText === packageName) {
                cy.get('[class="package-card_footer__Q_Mtm"]>button').eq(index).click()
            }
        })
    }

}
module.exports = new PackagesPage();