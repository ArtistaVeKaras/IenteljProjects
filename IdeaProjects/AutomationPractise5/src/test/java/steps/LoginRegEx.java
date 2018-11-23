package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPages;

public class LoginRegEx {

LoginPages loginpages = new LoginPages();

    @Given("^am on landing page$")
    public void am_on_landing_page() throws Throwable{
        loginpages.launchUrl();
    }

    @When("^I enter my \"([^\"]*)\" as \"([^\"]*)\"$")
    public void i_enter_my_as(String value, String data) throws Throwable {
        if (value.equalsIgnoreCase("username")){
        loginpages.usernameRegEx(data);
        }if (value.equalsIgnoreCase("password")){
            loginpages.passwordRegEx(data);
        }else{
            System.out.println("Data not Found");
        }
    }

    @When("^I click login button$")
    public void i_click_login_button() throws Throwable {
        loginpages.clickLogin();
    }

    @Then("^I should be on the homepage$")
    public void i_should_be_on_the_homepage() throws Throwable {
        loginpages.confirmHomePage();
    }
}
