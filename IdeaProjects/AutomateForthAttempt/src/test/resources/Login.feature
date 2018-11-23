Feature: As user I,
         want to be able to log in

  @TestCompleted
  Scenario:  Login without Regx
    Given am on the login page
    When I enter the username and the password
    And  I click the login button
    Then  home page should be dislpayed