import{test,expect} from '@playwright/test'


// run the test paralley
test.describe.configure({mode:'parallel'});
// hooks

test.beforeAll('BeforeAll hook',async({})=>{
    console.log('before all')
})

test.afterAll('After all', async({})=>{
    console.log('After all')
})

test.beforeEach('before each step',async({})=>{
    console.log("before each step")
})

test.afterEach('after each step',async({})=>{
    console.log("After each step")
})

test('test1', async({page})=>{

    console.log('test1')
})

test('test2', async({page})=>{

    console.log("test2")
})