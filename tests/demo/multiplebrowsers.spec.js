import{test,expect} from '@playwright/test'
const { chromium, firefox, webkit } = require('playwright');

test('crosssbrowser',async({page})=>{
  const browers = [chromium, firefox , webkit];
  for(const browserType of browers){
    // launch browser
    const browser = await browserType.launch();

    // create context
    const context = await browser.newContext()

    // launch page
    const page = await context.newPage();
    await page.goto("https://www.google.com");
    await Promise.all([

      page.waitForLoadState('domcontentloaded')
      
    ])
    await page.screenshot({path:`./screenshots/${browserType.name()}.png`})
    await page.close();
    // Add test code here
   
  }
})

 







