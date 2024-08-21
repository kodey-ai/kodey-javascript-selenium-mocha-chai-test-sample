import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import mocha from 'mocha'; // You can remove this if you don't use any mocha-specific imports

describe('UI Test Suite', function() {
    this.timeout(10000);
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function() {
        await driver.quit();
    });

    it('should open the webpage and check the title', async function() {
        await driver.get('https://library-app.firebaseapp.com/');
        const title = await driver.getTitle();
        expect(title).to.equal('LibraryApp - Ember Octane Tutorial');
    });
    
    it("Given no text in Email input, when you click 'Request Invitation' button, then the button's opacity should be 0.65.", async function() {
        const button = await driver.findElement(By.css("button.btn-primary"));
    
        // Check the opacity of the disabled button
        const opacity = await button.getCssValue("opacity");
        expect(opacity).to.equal("0.65");
    });

    // Add more test cases as needed
});