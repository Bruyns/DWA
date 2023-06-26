## challenge 10 description
DWA_10.3 Challenge 1
In this module, you will be required to use the Shoelace component library in a brand-new JavaScript project and build the original Tally App example from the very first lesson using only Shoelace components. You will be provided with three user stories that should be met at a minimum, however, you are encouraged to add additional functionality. You are free to choose the components you think are best suited to meet these user stories. Be mindful to examine all components and read the documentation thoroughly before proceeding.

 

You are required to resolve the following User Stories (expressed in Gherkin syntax).

 

SCENARIO: Increment the counter by one
GIVEN the tally counter app is open
AND the counter is at 0
WHEN I click the "Add" button
THEN the counter should display 1
 

SCENARIO: Decrement the counter by one
GIVEN the tally counter app is open
AND the counter is at 1
WHEN I click the "Subtract" button
THEN the counter should display 0
 

SCENARIO: Resetting the Tally Counter
GIVEN the tally counter app is open
AND the counter value is 10
WHEN I click on the "Reset" button
THEN the counter value should change to 0
AND a confirmation message should be displayed that the counter has been reset