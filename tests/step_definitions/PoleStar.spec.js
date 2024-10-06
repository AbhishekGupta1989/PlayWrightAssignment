const { test, expect } = require('@playwright/test');
const HomePage=require("../PageObjects/HomePage")


const Obj_homePage=new HomePage();

test("I am Visting PoleStar WebSite",async function(){

   
    await Obj_homePage.visitPoleStarWebsite();

    await Obj_homePage.handleCookiePop();



})

test("Validate PoleStar Logo on Homepage",async function(){
await Obj_homePage.validateHomePageLogo();

})


test("Validate home page menu options",async function(){

await Obj_homePage.validateHomePageMenuLinks();

})

test("Login",async function(){

    await Obj_homePage.login();
})