/*import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

//import org.junit.Assert;

import java.util.List;


public class CucumberVegaLoginTest {

    WebDriver driver;

    @Before
    public void setUp(){
        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
        driver = new ChromeDriver();
    }

    @Given("Navigate to login page")
    public void navigateToLoginPage() {
        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
        driver = new ChromeDriver();
        driver.navigate().to("http://localhost:3000/login");
        driver.manage().window().maximize();
    }

    @When("A user types in admin email")
    public void aUserTypesInAdminEmail() {
        WebElement email_input = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/form/div[1]/input"));
        email_input.sendKeys("admin@venus.com");
    }

    @And("A user types in admin password")
    public void aUserTypesInAdminPassword() {
        WebElement pass_input = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/form/div[2]/input"));
        pass_input.sendKeys("pass");
    }

    @And("A user clicks on Submit button")
    public void aUserClicksOnSubmitButton() {
        WebElement submit_button = driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/form/button"));
        submit_button.submit();
    }

    @Then("A user will be logged in")
    public void aUserWillBeLoggedIn() {
        //driver.navigate().to("http://localhost:3000/account");
        WebElement nav_logout = driver.findElement(By.xpath("/html/body/div/div/div[1]/div[1]/nav[2]/div/div/div/a"));
        //how verify logged in?
    }

    /*@After
    public void tearDown(){
        System.out.println("");
        if(driver!=null){
            driver.close();
            driver.quit();
        }
    }
}
*/