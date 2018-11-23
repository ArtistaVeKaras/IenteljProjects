Feature: As user I,
  want to be able to log in

  @TestCompleted
  Scenario: Login with Regx
    Given am on login page
    When I enter the "Username" as "montego001"
    And I enter the "Password" as "12345678"
    And  I click the login button
    Then  home page should is dislpayed
