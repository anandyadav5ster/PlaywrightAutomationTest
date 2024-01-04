// const { test,expect } = require("@playwright/test");
import { test, expect } from '@playwright/test';
import { PlaywrightTestConfig } from '@playwright/test';
import {loginPage} from '../../pages/login'

test.skip('Handle alert',async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await expect(page).toHaveTitle(/The Internet/);
    await page.getByRole('button',{name:'Click for JS Alert'}).click();
    await page.getByText('Click for JS Confirm').click()
});

test('Open Google',async({page})=>{

    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle(/Google/);
   
})
test('Handle Alert',async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await expect(page).toHaveTitle(/The Internet/);
    await page.getByRole('button',{name:'Click for JS Alert'}).click();
    await page.getByText('Click for JS Confirm').click()
    
  
  });
  
  test('Handle iframe',async({page})=>{
  
    await page.goto('https://the-internet.herokuapp.com/iframe');
    await page.frameLocator('#mce_0_ifr').locator('#tinymce').fill("Testing frame")
  
  });

  test('Handle nested iframe',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/nested_frames');
    var text = await page.frameLocator('[name="frame-bottom"]').locator('body').innerText();
    console.log(text);
    var topframe = await page.frameLocator('[name="frame-top"]');
    var lefttext = await topframe.frameLocator('[name="frame-left"]').locator('body').innerText();
    console.log(lefttext);
    var middleframetext = await topframe.frameLocator('[name="frame-middle"]').locator('body').innerText();
    console.log(middleframetext);
    var rightframetext = await topframe.frameLocator('[name="frame-right"]').locator('body').innerText();
    console.log(rightframetext);

  });

  test('Get text/Attribute',async({page})=>{

    await page.goto('https://www.amazon.in/');
    var gettext = await page.locator('h2').first().innerText();
    console.log(gettext);
    var getattributetext = await page.locator('[id="twotabsearchtextbox"]').first().getAttribute('aria-label');
    console.log(getattributetext);

  });

  test('Handle shadow element', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/shadowdom");
    var text1 = await page.locator('[slot="my-text"]').first().textContent();
    console.log(text1);
    
  });

  test('Handle Dropdown', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    await page.getByTitle(/ The Internet/)
    await page.locator('[id="dropdown"]').selectOption({value: '1'});
    console.log('selct by value')

    await page.locator('[id="dropdown"]').selectOption({index: 2});
    console.log('select by index');

    await page.locator('[id="dropdown"]').selectOption({label:"Option 1"});
    console.log('select by label ');
  });

test('Handle checkbox' , async({page})=>{
  
  await page.goto('https://the-internet.herokuapp.com/');
  await page.locator('[href="/checkboxes"]').click();
  await page.getByTitle(/The Internet/);
  await page.check('[type="checkbox"]');
  await page.isChecked('[type="checkbox"]');
  await page.screenshot({path: './screenshots/test1'+new Date().getTime()+'.png'})
  console.log('select checkbox pass');

  await page.uncheck('[type="checkbox"]');
  await page.screenshot({path: './screenshots/test'+new Date().getTime()+'.png'})
  console.log('screenshot');
  await page.screenshot({path:'./screenshots/fullpagescreenshot'+new Date().getTime()+'.png',fullPage:true})

  console.log('Full page screenshot')

});

test('Soft Assertion',async({page})=>{

  await page.goto('https://the-internet.herokuapp.com/');
  await expect.soft(page).toHaveTitle(/The Internet122/)
  await expect.soft(page).toHaveTitle(/The Internet/);
  console.log("Pass soft assertion");
  
});

test('@checkbox Handle multiple checkbox', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
await page.selectOption('#colors',['Blue','Red','Yellow']);
const option = await page.locator('#colors option');
await expect(option).toHaveCount(5);
// await page.waitForTimeout(5000);
console.log("Select multiple checkbox");
});

test('@autocomplete Handle autocomplete' , async({page})=>{

  await page.goto('https://www.redbus.in/');
  await page.locator('#src').fill('Delhi');
  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI jTMXri')]");
  const cities = await page.$$("//li[contains(@class,'sc-iwsKbI jTMXri')]");

  for( let city of cities)
  {
     var c = await city.textContent();
     console.log(c)
  }

});