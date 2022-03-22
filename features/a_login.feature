@feature
Feature: Login

Scenario: Login

 Given user navigates to the Login form page

    When user enters "John Doe" in the name field

    When user enters "John Doe" in the password field

    When user clicks on "LOGIN" button

    When "Welcome: John Doe" header appears

    When user clicks on AddIcon button

    When user gets a Create task popup

    When user enters "Test" in the title field

    When user enters "Do Test" in the task field

    When user clicks on Create button

    Then "Test" is added to task list