Feature:  Health MOT Booking

    This feature simplifies the process of booking a Full Body Health MOT.
    It ensures that users can easily select their desired Health MOT package and smoothly proceed through the booking steps.


    Scenario: Booking a Health MOT Package - Active Package
        Given I navigate to the Bluecrest "packages" page
        And I scroll to the Full Body Health MOTs packages section
        When I select the "Active" Health MOTs package
        And I input my postcode as "LU5 7AT"
        And I choose the location "Houghton Regis, Luton"
        And I click on the Search button
        And I select a convenient location, "Aubrey Park" and time
        When I click on the Confim button on the Venue page
        And I verify my order summary and click Continue button
        Then I should be presented to the "Personal details" screen
