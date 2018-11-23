Feature:As a user I want to be able to login

#  this an effective way to test multiple test with table examples
#  do this when have a lot of data to pass on with regular expression
  Background: Login
    Given am on the homepage for weglobal training
    When  I enter my "username" as "montego001"
    And   I enter my "password" as "12345678"
    And   I click the login button
    Then  The home page should be displayed

  Scenario Outline: View Menu Pages
    Given the home page is displayed
    When I click "<Tab>" Your Jet" tab
    Then "<ConfirmPage>" page should be displayed


    Examples:
      |     Tab      | ConfirmPage   |
      | TradeYourJet | TradeYourJet  |
      | BookYourJet  |  BookYourJet  |
      | Just Trade   | Just Trade    |
      | About Us     | About us      |



