import{test,expect} from '@playwright/test'
const testData = JSON.parse(JSON.stringify(require('./TestData.json')))

test('check with test data', async({page})=>{

    await page.goto(testData.user.url)
    const title = await page.title()
    console.log(title)
})