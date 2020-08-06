import { browser } from 'protractor';
import * as globalMethods from 'questglobal';
import { NavigationBar } from '../pages/navigationBar.po';



describe('Testing', async () => {
    let navBar: NavigationBar = new NavigationBar();
    let domain = 'http://amazon.com/';
    it('', async () => {
        await browser.waitForAngularEnabled(false);
      
        //Steps here
        await browser.get(domain);
        await browser.sleep(5000);
        await navBar.clickCart();
        await browser.sleep (20000);
    });
});