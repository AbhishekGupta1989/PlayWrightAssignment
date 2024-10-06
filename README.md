# Playwright with JavaScript
## Author: Abhishek Gupta
### Description
This project uses Playwright with JavaScript to automate web testing. It employs the Page Object Model design pattern for organizing test code and Allure for generating test reports.

#### Project Structure
#### tests: The main folder contains: 
#### PageElements: Stores web page elements.
#### PageObject: Contains methods specific to each page.
#### step_definitions: Contains all test case files ending in .spec.js.
#### TestData: Holds all the necessary test data.

#### Helper: Contains reusable methods for various tasks.

#### package.json: Manages all project dependencies.

#### playwright.config.js: Contains configuration settings for Playwright.

# Getting Started
To set up the project, run the following commands in your terminal:

  To install Playwright: npm install playwright --save-dev
  To install Chai: npm install chai --save-dev
  To install Allure: npm i -D allure-playwright

  # Configuration
  To enable Allure reporting, update the playwright.config.js file as follows:
  
      module.exports = defineConfig({ reporter: 'allure-playwright' });

# Executing Tests

"scripts": {
    "test": "npx playwright test tests/step_definitions/PoleStar.spec.js",
    "allureReport": "allure generate ./allure-results -o ./allure-report --clean && allure open ./allure-report"
}

To run the tests, hover over the "test" script in the package.json file and click the run link. Do the same with the "allureReport" script for the Allure report.

# Example Test Case
The PoleStar.spec.js file contains test cases for visiting the PoleStar website:

const { test, expect } = require('@playwright/test');
const HomePage = require("../PageObjects/HomePage");

const obj_homePage = new HomePage();

test("Visiting the PoleStar Website", async () => {
    await obj_homePage.visitPoleStarWebsite();
    await obj_homePage.handleCookiePop();
});

# Home Page Methods
The HomePage.js file includes methods for interacting with the PoleStar website:
class HomePage {
    async visitPoleStarWebsite() {
        await page.goto(HomePageElement.homepage.locate_URL);
        Logger.info(["Navigated to the PoleStar website."]);
    }
}

# Elements of the Home Page
The HomePageElement.js file defines the elements used on the PoleStar homepage:

module.exports = {
    homepage: {
        locate_URL: "https://www.polestar.com/se/",
        locate_accept_button: "//button[@id='onetrust-accept-btn-handler']",
        // Other elements...
    }
};

