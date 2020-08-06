import { browser, by, element, WebElement} from 'protractor';
import * as globalMethods from 'questglobal';
import {protractor} from 'protractor/built/ptor';

module.exports = {
//gets data from the Test Data Management api
  /**
     * Gets data
     * @param feature
     * @param rtestFile 
     */
    async getData (feature, testFile){
      var config = await browser.getProcessedConfig();
      var configDataUrl = config.dataUrl;
      console.log("Config data url: " + configDataUrl);
      console.log("Entire endpoint: " + configDataUrl + "/" + feature + "/" + testFile);
      var dataFile = await globalMethods.getData(configDataUrl, feature, testFile);
      console.log("Returned datafile:" + dataFile);
      console.log(dataFile);
      return dataFile;
    }
};

