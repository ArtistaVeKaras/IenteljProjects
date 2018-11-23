Feature: As a user I want to be able
        to login

  @TestCompleted
  Scenario: Login
    Given am on the landing page
    When I enter my username
    And I enter my password
    And I click the login button
    Then I should be on the home page