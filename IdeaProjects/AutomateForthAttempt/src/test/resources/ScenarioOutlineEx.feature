Feature: As user I,
  want to be able to log in

  /*
  login to system using multiple users at once
  with regular expresssion
  */
  @TestCompleted
  Scenario Outline: Login Scenario Outline
    Given am on login page
    When I enter my "Username" as "<Username_Details>" in the text field
    And I enter my "Password" as "<Password_Details>" in the text field
    And I click login button
    Then Homepage is dislpayed

Examples: Login Details
    |Username_Details|Password_Details|
    | montego001     | 12345678       |
    | monteg         |   1245         |
    | claudio        |  cor_1245      |























