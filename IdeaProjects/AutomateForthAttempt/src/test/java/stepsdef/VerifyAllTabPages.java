package stepsdef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class VerifyAllTabPages {



    @Given("^the home page is displayed$")
    public void the_home_page_is_displayed() throws Throwable {

    }


    @When("^I click \"([^\"]*)\" tab$")
    public void iClickTab(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^the \"([^\"]*)\" page should be displayed$")
    public void the_page_should_be_displayed(String arg1) throws Throwable {

    }

}
