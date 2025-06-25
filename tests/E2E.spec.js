import {test,expect} from '@playwright/test';
import {LoginPage} from './POM/pages/LoginPage.js';
import {HomePage} from './POM/pages/HomePage.js';

test("E2E Test", async ({page}) => {
    const homePage = new HomePage(page, expect);
    const loginPage = new LoginPage(page, expect);
    
    await loginPage.login();
    await homePage.closeChatbot();
    await homePage.navigateToViewAndUpdateProfile();
   
})
