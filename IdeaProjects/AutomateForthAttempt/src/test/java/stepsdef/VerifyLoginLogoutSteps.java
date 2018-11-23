package stepsdef;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import util.DriverUtil;

public class VerifyLoginLogoutSteps extends  DriverUtil {

    DriverUtil driverutil = new DriverUtil();


    @Before
    public void sartSession(){
        driverutil.setDrivers("firefox");
    }

    @Given("^am on the \"([^\"]*)\" page and the title is \"([^\"]*)\"$")
    public void am_on_the_page_and_the_title_is(String value, String data) throws Throwable {

        switch (value){
            case "Login":
                driver.get("http://test001-automatetillinfinity.co.uk/");
            String actualTitle = driver.getTitle();
            String expectedtitle = data;
            Assert.assertEquals(actualTitle, expectedtitle);
            break;
        }

    }

    @When("^I enter \"([^\"]*)\" in the textfield as \"([^\"]*)\"$")
    public void iEnterInTheTextfieldAs(String param, String data) throws Throwable {
      if(param.equals("username")){
          driver.findElement(By.name("username")).sendKeys(data);
      }if (param.equals("password")){
          driver.findElement(By.name("password")).sendKeys(data);
        }else{
          System.out.println("data not found");
        }
    }


    @Then("^I should on the \"([^\"]*)\" page and the title is displayed as \"([^\"]*)\"$")
    public void i_should_on_the_page_and_the_title_is_displayed_as(String keyword, String title) throws Throwable {
       if(keyword.equalsIgnoreCase("Home")){
           String actualHomePageTitle = driver.getTitle();
           String expectedHomePageTitle = title;
           Assert.assertEquals(actualHomePageTitle,expectedHomePageTitle);
       }
    }

    @And("^I click  \"([^\"]*)\" button on the \"([^\"]*)\" page$")
    public void iClickButtonOnThePage(String arg0, String arg1) throws Throwable {
        driver.findElement(By.id("LoginBtn")).click();
    }
}
