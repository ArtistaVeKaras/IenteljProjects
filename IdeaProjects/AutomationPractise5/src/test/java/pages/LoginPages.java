package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import util.DriverUtil;

public class LoginPages extends DriverUtil {

    By UsernameTextField = By.id("usernamelogin");
    By PasswordTextField = By.id("loginPassword");
    By LoginButton = By.id("LoginBtn");

    String BaseUrl = "http://test001-automatetillinfinity.co.uk/";

    public void launchUrl(){
        driver.get(BaseUrl);
    }
    public void username(){driver.findElement(UsernameTextField).sendKeys("montego001"); }
    public void password(){driver.findElement(PasswordTextField).sendKeys("12345678"); }

    public void usernameRegEx(String userdata){driver.findElement(UsernameTextField).sendKeys(userdata);}
    public void passwordRegEx(String userdata){driver.findElement(PasswordTextField).sendKeys(userdata); }
    public void clickLogin(){
        driver.findElement(LoginButton).click();
    }
    public void confirmHomePage(){

        WebDriverWait wait = new WebDriverWait(driver,10);
        boolean expectedTitle = wait.until(ExpectedConditions.titleIs("WEG Group"));
        boolean actulTitle = true;
        Assert.assertEquals(expectedTitle,actulTitle);
    }

}
