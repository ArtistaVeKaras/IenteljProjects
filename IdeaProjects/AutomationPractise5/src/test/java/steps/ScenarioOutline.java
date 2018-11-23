package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.After;
import org.junit.Before;
import pages.LoginPages;
import util.DriverUtil;

public class ScenarioOutline {

    LoginPages loginpages = new LoginPages();
    DriverUtil driveruitl = new DriverUtil();


    @When("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
    public void i_enter_as(String value, String data) throws Throwable {
        if (value.equalsIgnoreCase("username")){
        loginpages.usernameRegEx(data);
        }if (value.equalsIgnoreCase("password")){
            loginpages.passwordRegEx(data);
        }else{
            System.out.println("Values not found!");
        }
    }

    @When("^I click  the login button$")
    public void i_click_the_login_button() throws Throwable {
        loginpages.clickLogin();
    }

    @Then("^I should be on homepage$")
    public void i_should_be_on_homepage() throws Throwable {
     loginpages.confirmHomePage();
    }

}
