class LoginPage{

    constructor(page,expect){
        this.page = page;
        this.expect = expect;
        this.usernameInput = page.locator('#usernameField');
        this.passwordInput = page.locator('#passwordField');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        

    }

    async login(){
        await this.page.goto("https://www.naukri.com/nlogin/login?URL=https://www.naukri.com/mnjuser/homepage");
        await this.page.waitForLoadState('networkidle');
        await this.usernameInput.fill('erjoshivaibhav@gmail.com');
        await this.passwordInput.fill('Vaibhav@123');
        await this.loginButton.first().click();
        await this.page.waitForLoadState('networkidle');
    }

}

module.exports = {LoginPage};