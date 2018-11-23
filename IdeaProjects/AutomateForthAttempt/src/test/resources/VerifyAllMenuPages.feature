Feature:As a user I want to be able to login

#  background runs before any of the scenarios
#  is executed
#  this is  also a very tedious way of writing mulltiple test for each tab
#  the best way to test scenarios like this is to do scenario outline wit examples
  Background: Login
    Given am on the homepage for weglobal training
    When  I enter my "username" as "montego001"
    And   I enter my "password" as "12345678"
    And   I click the login button
    Then  The home page should be displayed

    Scenario: View all Menu Pages
      Given the home page is displayed
      When I click "Trade Your Jet" tab
      Then the "Trade Your Jet" page should be displayed

  Scenario: View all Menu Pages
    Given the home page is displayed
    When I click "Book Your Jet" tab
    Then the "Book Your Jet" page should be displayed

  Scenario: View all Menu Pages
    Given the home page is displayed
    When I click "Just Trade" tab
    Then the "Just Trade" page should be displayed

