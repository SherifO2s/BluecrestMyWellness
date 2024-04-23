class OrderSummaryPage {
    elements = {
        getpackageTxt: () => cy.get('.card-body.product-card-body>h5'),
        getAddressTxt: () => cy.get('.card-body.product-card-body>p'),
        getContinueBtn: () => cy.get('[data-link_category="Continue"]'),
    }
}
module.exports = new OrderSummaryPage();