import{test, expect} from '@playwright/test'


test('handle multiple 2 tabs',async({context})=>{
    const page = await context.newPage()
    // full screen view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://playwright.dev/')
    await page.locator("//img[@src='img/logos/VSCode.png']").click()

    const [newtab] = await Promise.all([
        await context.waitForEvent('page')
       
    ])
    await newtab.waitForLoadState()
    let title = await newtab.title()
    console.log(title)
})

test('handle multiple tabs',async({context})=>{
    const page = await context.newPage()
    // full screen view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://playwright.dev/')
    await page.locator("//img[@src='img/logos/VSCode.png']").click()
    
    const [newtab] = await Promise.all([
        await context.waitForEvent('page')
       
    ])
    await newtab.waitForLoadState()
    // loop over multiple tabs
    const tabs = newtab.context().pages()
    console.log(tabs.length); 
    for(let i =0;i<tabs.length;i++){
        let title = await tabs[i].title()
        console.log(title)
    }
    
})