import { Given, Then, When } from 'cucumber';
import { browser } from 'protractor';
import { NavigationBar } from '../pages/navigationBar.po';
import '../global/global';
import * as globalMethods from 'questglobal';

let navBar: NavigationBar = new NavigationBar();
var timeout = 9500;


Given(/^the browser is at the Amazon home page$/, navToHomePage);
async function navToHomePage() {
}