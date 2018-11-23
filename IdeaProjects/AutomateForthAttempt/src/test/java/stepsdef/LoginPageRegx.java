package stepsdef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pagesobj.LoginPages;
import util.DriverUtil;

public class LoginPageRegx {

    LoginPages loginPages = new LoginPages();
     static WebDriver driver;

    @Given("^am on login page$")
    public void amOnLoginPage() throws Throwable {
        loginPages.launchUrl();
    }

    @When("^I enter the \"([^\"]*)\" as \"([^\"]*)\"$")
    public void i_enter_the_as(String value, String data) throws Throwable {
        if (value.equalsIgnoreCase("Username")) {
            System.out.println("test for username");
            loginPages.usernameRegx(data);
        }
        if (value.equalsIgnoreCase("Password")){
            System.out.println("Test for password");
            loginPages.passwordRegx(data);
        }
        else{
            System.out.println("Data not found");
        }
    }

    @Then("^home page should is dislpayed$")
    public void home_page_should_is_dislpayed() throws Throwable {
        loginPages.confirmTitlePage();

//        String expectedTitle = "https:///www.google.com";
//        String currentUrl = driver.getCurrentUrl();
//        Assert.assertEquals(currentUrl, true, expectedTitle);
//        System.out.println("The current URl is :"+currentUrl);

    }
}