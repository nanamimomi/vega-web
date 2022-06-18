Feature: Testing Vega admin login
  Scenario: An admin logs into their account
    Given Navigate to login page
    When A user types in admin email
    And A user types in admin password
    And A user clicks on Submit button
    Then A user will be logged in