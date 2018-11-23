package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import pages.LoginPages;
import util.DriverUtil;

public class LoginTestStep {

    LoginPages loginpage = new LoginPages();
    DriverUtil driverutil = new DriverUtil();


    @Before
    public void starSession() {
        driverutil.setDriver("firefox");
    }
        @Given("^am on the landing page$")
        public void am_on_the_landing_page() throws Throwable {
            loginpage.launchUrl();
        }

    @When("^I enter my username$")
    public void i_enter_my_username() throws Throwable {
     loginpage.username();
    }

    @When("^I enter my password$")
    public void i_enter_my_password() throws Throwable {
        loginpage.password();
    }

        @When("^I click the login button$")
        public void i_click_the_login_button() throws Throwable {
            loginpage.clickLogin();
        }

        @Then("^I should be on the home page$")
        public void i_should_be_on_the_home_page() throws Throwable {
          loginpage.confirmHomePage();
        }

        @After
    public void shutDown(){
        driverutil.tearDown();
        }
    }

