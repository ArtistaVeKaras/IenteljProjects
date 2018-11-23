Feature: As s user I want to be able to login


#  this is way of writing is called regular expression
  Scenario: Login
    Given am on the homepage for weglobal training
    When  I enter my "username" as "montego001"
    And   I enter my "password" as "12345678"
    And   click the login button
    Then the home page should be displayed


#    this way of writing is called datable
  Scenario: Login 2
    Given am on the homepage fro weglobal trainig
    When I enter my username and passsword as below
      | montego | 12345678 |
    And I click the "login" button
    Then  the "home" page is displayed

#    this way of writing is called scenario outline to multiple data
#    UsernameData this is a placeholder
#    password is a parameter
  Scenario Outline: Login 3
    Given am on the homepage for weglobal training
    When  I enter my login "username" as "<UsernameData>"
    And   I enter my login "password" as "<PasswordData>"
    And   click the "login" button
    Then the "home" page should be displayed

    Examples: Login Data

      | UsernameData | PasswordData |
      | Montego001   | 12345678     |
      | montego002   | 12345000     |
      | montego003   | 12999900     |


# this way of writting test is not very efficient
  Scenario: Login 4
    Given am on the homepage for weglobal training
    When I enter the username as Monetog001
    And I enter my password as 12345678
    And I click the login buttonT
    Then the home page should be displayed