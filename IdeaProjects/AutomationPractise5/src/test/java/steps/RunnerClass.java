package steps;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
                 plugin = {"pretty","html:target/cucumber","json:target/cucumber-report"},
               features = {"./src/test/resources"},
                   tags = {"@TestCompleted"}
)

public class RunnerClass {


}
