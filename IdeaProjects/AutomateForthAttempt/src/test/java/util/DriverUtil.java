package util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DriverUtil {

    public static WebDriver driver;

    public void setDrivers(String browser){
        if(driver == null)
            if(browser.equalsIgnoreCase("firefox")){
            System.setProperty("webdriver.gecko.driver","/Users/admin/Documents/Drivers/geckodriver");
            driver =  new FirefoxDriver();
            }
    }
    public void tearDown(){
//        driver.close();
//        driver.quit();
    }


}


