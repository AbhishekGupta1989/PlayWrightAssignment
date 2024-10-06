const { chromium } = require('playwright'); 

var page;
beforeAll(async () => {
    global.browser = await chromium.launch({ headless: false });
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
    global.page=page;
});
afterAll(async () => {
    await global.browser.close();
})
module.exports = { page };
