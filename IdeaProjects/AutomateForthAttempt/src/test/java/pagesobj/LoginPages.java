package pagesobj;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import util.DriverUtil;

public class LoginPages extends DriverUtil {

    By UsernameTextField = By.id("usernamelogin");
    By PasswordTextField = By.id("loginPassword");
    By Loginbutton = By.id("LoginBtn");

    String BaseUrl = "http://test001-automatetillinfinity.co.uk/login.php?logout=1";

    public void launchUrl() {driver.get(BaseUrl);
    }
    public void username(){driver.findElement(UsernameTextField).sendKeys("montego001");
    }
    public void usernameRegx(String testData) {driver.findElement(UsernameTextField).sendKeys(testData);
    }
    public void passwordRegx(String testData){driver.findElement(PasswordTextField).sendKeys(testData);
    }
    public void loginBtn(){driver.findElement(Loginbutton).click();
    }
    public void confirmTitlePage(){

//        This is a more efficient way of writing assertion
        WebDriverWait wait = new WebDriverWait(driver,10);
        boolean expectedTitle = wait.until(ExpectedConditions.titleIs("WEG Group"));
        boolean actualTitle = true;
        Assert.assertEquals(expectedTitle,actualTitle);

//        this is one way of asserting the title
//        Thread.sleep(5000,TimeSeconds);
//        String expectedTitle = driver.getTitle ();
//        String actualTitle = "WEG Group";
//        Assert.assertEquals(expectedTitle,actualTitle);
    }

}


