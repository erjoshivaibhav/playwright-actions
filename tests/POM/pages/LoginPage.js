class LoginPage {
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;
    this.usernameInput = this.page.locator("input[placeholder='Enter your active Email ID / Username']");
    this.passwordInput = this.page.locator("input[placeholder='Enter your password']");
    this.loginButton = this.page.getByRole("button", { name: "Login" });
    this.linkLogin = this.page.getByRole("link", { name: "Login" });
  }

  async login() {
    await this.page.goto("https://www.naukri.com");
    await this.page.waitForLoadState("networkidle");
    await this.linkLogin.first().click();
    await this.page.waitForLoadState("networkidle");
    await this.usernameInput.fill("erjoshivaibhav@gmail.com");
    await this.passwordInput.fill("Vaibhav@123");
    await this.loginButton.first().click();
    await this.page.waitForLoadState("networkidle");
  }
}

module.exports = { LoginPage };
