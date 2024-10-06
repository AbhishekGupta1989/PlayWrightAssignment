const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright'); 

beforeAll(async () => {
    global.browser = await chromium.launch({ headless: false });
    global.context = await global.browser.newContext();
    page = await global.context.newPage();
});
afterAll(async () => {
    await global.browser.close();
})
