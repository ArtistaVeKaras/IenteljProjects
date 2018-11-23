package stepsdef;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pagesobj.LoginPages;
import util.DriverUtil;

public class VerifyScenarioOutline {

    LoginPages loginPages = new LoginPages();
    DriverUtil driverUtil = new DriverUtil();

    @Before
    public void startUrl(){
//        loginPages.launchUrl();
    }

        @When("^I enter my \"([^\"]*)\" as \"([^\"]*)\" in the text field$")
        public void i_enter_my_as_in_the_text_field(String value, String data) throws Throwable {
        if (value.equalsIgnoreCase("Username")) {
            System.out.println("Testing for username");
            loginPages.usernameRegx(data);
        }
        if (value.equalsIgnoreCase("Password")) {
            System.out.println("Testing for password");
            loginPages.passwordRegx(data);
        } else {
            System.out.println("Data not found");
        }
    }

        @When("^I click login button$")
        public void i_click_login_button () throws Throwable {
            loginPages.loginBtn();
        }

        @Then("^Homepage is dislpayed$")
        public void homepage_is_dislpayed () throws Throwable {
//            loginPages.confirmTitlePage();
        }
        @After
        public void closeBroser(){

//        driverUtil.tearDown();
        }
    }
