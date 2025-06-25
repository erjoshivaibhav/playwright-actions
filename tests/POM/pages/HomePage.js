class HomePage {
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;
    this.crossIcon = this.page.locator(".chatbot_Nav > .crossIcon");
    this.menu = this.page.locator(".nI-gNb-drawer__icon > .nI-gNb-drawer__bars");
    this.linkViewAndUpdateProfile = this.page.getByRole('link', { name: 'View & Update Profile' });
  }

  async closeChatbot() {
    // Check if the cross icon is visible before clicking
    const isVisible = await this.crossIcon.isVisible({ timeout: 5000 }); // Adjust timeout as needed
    if (!isVisible) {
      console.log("Cross icon is not visible. Cannot close chatbot.");
      return;
    }
  }

  async navigateToViewAndUpdateProfile() {
    await this.menu.click();
    await this.linkViewAndUpdateProfile.click();
    await this.page.waitForTimeout(5000); // Wait for 5 seconds
    const pageTitle = await this.page.title({timeout: 5000}); // Adjust timeout as needed
    // Check if the page title contains "View & Update Profile"
    await this.expect(pageTitle).toContain("Profile | Mynaukri");
  }
}

module.exports = { HomePage };
