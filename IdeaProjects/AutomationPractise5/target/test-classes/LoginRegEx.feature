Feature: As a user I want to be able
  to login


  Scenario: Login with Regx
    Given am on landing page
    When I enter my "username" as "montego001"
    When I enter my "password" as "12345678"
    And I click login button
    Then I should be on the homepage