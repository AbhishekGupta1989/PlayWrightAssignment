const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright'); 
const homepageElement=require("../PageElements/HomePageElement");
const HomePageElement = require('../PageElements/HomePageElement');
const Logger = require('../Helper/Logger')
const loginData = require('../Testdata/login.json')

    let browser;
    let context;
    let page;
    
    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
    });
    test.afterAll(async () => {
        await browser.close();
    })

class HomePage {

    //Navigate to poleStar WebSite
    async visitPoleStarWebsite() {
        
        await page.goto(HomePageElement.homepage.locate_URL); 
        Logger.info(["Navigated to Pole star web.."])
       
    }

    //click accept cookie button
    async handleCookiePop()
    {
        await page.locator(homepageElement.homepage.locate_accept_button).click();
        Logger.info(["Cookie Pop Handled Successfully ...."])
    }
    //validate homepage logo
    async validateHomePageLogo(){
    await page.locator(homepageElement.homepage.locate_logo).isVisible();
    Logger.info(["Home page logo Validated.."])
        
    }
    //validate HomePage links
    async validateHomePageMenuLinks() {
        const links = [
            homepageElement.homepage.locate_polestar2_link,
            homepageElement.homepage.locate_polestar3_link,
            homepageElement.homepage.locate_polestar4_link,
            homepageElement.homepage.locate_shopping_tools,
            homepageElement.homepage.locate_more_link
        ];
    
        const visibilityResults = await Promise.all(links.map(link => 
            page.locator(link).isVisible()
        ));
    
        const allVisible = visibilityResults.every(isVisible => isVisible);
    
        if (allVisible) {
            Logger.info("All Home Page links are visible");
        } else {
            Logger.warn("Some Home Page links are not visible");
        }
    }

    async login()
    {
        await page.locator(homepageElement.homepage.locate_login_btn).click();
        await page.locator(homepageElement.homepage.locate_Email_inputBx).type(loginData.login.Email_id);
        await page.locator(homepageElement.homepage.locate_password_inputBx).type(loginData.login.password);
        await page.locator(homepageElement.homepage.locate_loginSubmit_Btn).click();

    }
    

}

module.exports = HomePage;
