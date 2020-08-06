import * as globalMethods from 'questglobal';
import { element, by, browser } from 'protractor';


var projectGlobal = require('../global/global');
let timeout=10000;
let dataFile;
export class NavigationBar{

    getCart(){
        return globalMethods.getElementById("nav-cart");
    }

    async clickCart(){
        await globalMethods.click(this.getCart(), "Cart button", 5000);
    }
}