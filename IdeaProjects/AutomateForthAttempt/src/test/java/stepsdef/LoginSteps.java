package stepsdef;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pagesobj.LoginPages;
import util.DriverUtil;

public class LoginSteps {

    LoginPages loginpage = new LoginPages();
    DriverUtil driverutil = new DriverUtil();

    @Before
    public void startSession(){
        driverutil.setDrivers("firefox");
    }

    @Given("^am on the login page$")
    public void am_on_the_login_page() throws Throwable {
        loginpage.launchUrl();
    }

    @When("^I enter the username and the password$")
    public void i_enter_the_username_and_the_password() throws Throwable {
         loginpage.username();
          }

    @When("^I click the login button$")
    public void i_click_the_login_button() throws Throwable {
           loginpage.loginBtn();
    }

    @Then("^home page should be dislpayed$")
    public void home_page_should_be_dislpayed() throws Throwable {
        loginpage.confirmTitlePage();
    }
    @After
    public void closeSession(){
        driverutil.tearDown();
    }

}
