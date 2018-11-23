Feature: As a user I want to be able
  to login

  @TestCompleted
  Scenario Outline: Login
    Given am on the landing page
    When I enter "username" as "<User_Details>"
    When I enter "password" as "<Password_Details>"
    And I click  the login button
    Then I should be on homepage

    Examples: Login with multiple acct
    | User_Details | Password_Details |
    |montego001    | 12345678         |
    |montego       | 00000000         |
    |monteg        | 7878787878       |