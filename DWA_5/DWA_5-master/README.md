# DWA_05.4 Project
## challenge 1 details

**PLEASE NOTE**: 
This exercise provides user stories in the Gherkin syntax, covered in Documentation - Reading Material. Please make sure you understand the use and meaning of this syntax before continuing.

 

Below is the HTML and JavaScript code for a “Whole Number Divider”. At the moment it only meets two user stories (see below under “Resolved Stories”). Please ensure that it meets all user stories listed below:

 
## Resolved Stories
**Scenario**: Starting program state

* GIVEN that the submit button has not been pressed yet
* AND the code has just loaded
* THEN “NO calculation performed” should be displayed at the bottom
  
**Scenario**: Dividing numbers result in a whole number

* GIVEN that the submit button is pressed
* WHEN 20 is entered into the first input
* AND 10 is entered into the second input
* THEN 2 should be displayed at the bottom
 
## Unresolved Stories
**Scenario**: Dividing numbers result in a decimal number

* GIVEN that the submit button is pressed
* WHEN 20 is entered into the first input
* AND 3 is entered into the second input
* THEN the number 6 with no decimal should be shown
  -the toFixed() method should be used to ensure their is zero decimal places or use math.floor/ceiling to round up or down
 ![image](./images/math.floor().png)
 ![image](./images/toFixed().png)


**Scenario**: Validation when values are missing

* GIVEN that the submit button is pressed
* WHEN either or both inputs are empty
* THEN the divisions should not be done
* AND the following should be displayed: “Division not performed. Both values are required in inputs. Try again”.
 -if either input dividend or divider is NaN or null/undefined the text should be displayed

**Scenario**: An invalid division should log an error in the console

* GIVEN that the submit button is pressed
* WHEN 20 is entered into the first input
* AND -3 is entered into the second input
* THEN the division should not be done
* AND the following should be displayed: “Division not performed. Invalid number provided. Try again”.
* AND an error should be logged in the browser console that shows the call stack
* BUT the program should not crash entirely
 -if dividend or divider is < 0 text should display as stated above, a console.log error should be logged, and the program has to remain active without closing

**Scenario**: Providing anything that is not a number should crash the program

* GIVEN that the submit button is pressed
* WHEN ‘YOLO’ is entered into the first input
* AND ‘+++’ is entered into the second input
* THEN the entire screen should be replaced with “Something critical went wrong. Please reload the page
* AND an error should be logged in the browser console that shows the call stack.

