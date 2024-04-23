class VenuePage {
    elements = {
        getVenueSearchBoxInput: () => cy.get('#address-search', { timeout: 6000 }),
        getVenueSearchBtn: () => cy.get('#address-search-btn', { timeout: 6000 }),
        getConfirmBtn: () => cy.get('.submit-reservation').eq(2),
    }

    selectPreferredLocation(locationName) {
        cy.get('.col-md-6.choose-venue-col>#venue-list>div', { timeout: 25000 }).each(($el, index, $list) => {
            const venueName = $el.text().trim();

            if (venueName.includes(locationName)) {
                cy.get('.col-md-6.choose-venue-col>#venue-list>div').eq(index).click()
            }
        });
    }

    selectPreferredDayAndTime() {
        // Date
        cy.get('.venue-available-days-list.collapse.show')
            .find('.venue-date-flex')
            .its('length')
            .then(numElements => {
                // Generate a random index
                const randomIndex = Math.floor(Math.random() * numElements);

                // Select the element at the random index
                cy.get('.venue-available-days-list.collapse.show>.venue-date-flex')
                    .eq(randomIndex)
                    .click();
            });


        // Time
        cy.get('.time_cards_holder.time', { timeout: 6000 })
            .find('.available_time_card')
            .its('length')
            .then(numElements => {
                // Generate a random index
                const randomIndex = Math.floor(Math.random() * numElements);

                // Select the element at the random index
                cy.get('.time_cards_holder.time>.available_time_card')
                    .eq(randomIndex)
                    .click();
            });
    }



}
module.exports = new VenuePage();