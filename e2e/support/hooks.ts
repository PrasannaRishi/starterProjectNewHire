import { NavigationBar } from '../pages/navigationBar.po';
import { Before } from 'cucumber';
import { browser } from 'protractor';
import '../global/global';
import * as globalMethods from 'questglobal';

const { BeforeAll, After, setDefaultTimeout } = require('cucumber');
const navBar: NavigationBar = new NavigationBar();
var global = require('../global/global');

BeforeAll(function (scenario, callback) {
    console.log("Testing 1-2-3");
    setDefaultTimeout(60000);
});
Before(async function () {
     console.log("Navigate to home page before test begins");
     //TODO Navigate to home page
});