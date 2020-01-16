/*
#----------------------------------------------------------------
# Original Author       : Pawan K Gupta
# Created Date          : 04/12/2019
# Last Modified by      : Pawan K gupta
# Last Modification Date: 25/12/2019
#----------------------------------------------------------------
*/

import { browser, element, ElementArrayFinder } from 'protractor';
import { by } from 'protractor';
import { WebElementPromise } from 'protractor';
import { Logger } from '../Configuration/log4jsconf';

const logger = Logger.logger();

export class ProtractorCommon {

  public static getByType(locator: string, locatorType: string): any {
    /*
    This method is used for the validating proper locator type
    Argument: locator and locator type, text <default is null>
    Returns: element locator <Protractor By>
    */
    logger.debug('Validating the locator type....');
    locatorType = locatorType.toLowerCase();
    if (locatorType === 'id') {
      return (by.id(locator));
    } else if (locatorType === 'css') {
      return (by.css(locator));
    } else if (locatorType === 'xpath') {
      return (by.xpath(locator));
    } else if (locatorType === 'name') {
      return (by.name(locator));
    } else if (locatorType === 'linktext') {
      return (by.linkText(locator));
    } else if (locatorType === 'model') {
      return (by.model(locator));
    } else if (locatorType === 'classname') {
      return (by.className(locator));
    } else if (locatorType === 'tagname') {
      return (by.tagName(locator));
    } else {
      logger.error('Locator type is not valid!!!!!!');
      return null;
    }
  }

  public static getElement(locator: string, locatorType: string): any {
    /*
    This method can be use to get the element of any locator
    Argument: locator and locator type, text <default is null>
    Returns: element <WebElementPromise>
    */
    try {
      return browser.findElement(this.getByType(locator, locatorType)).then((ele) => {
        logger.debug('Finding the element of locator: ' + locator);
        Promise.resolve(ele);
        logger.debug('element found: ' + ele.getText());
        return ele;
      });
    } catch (e) {
      logger.error((e as Error).message);
    }
  }
  public static elementClick(locator: string, locatorType: string) {
    /*
    This method can be use for clicking on a button
    Argument: locator and locator type
    Returns: N/A
    */
    try {
      this.getElement(locator, locatorType).then((ele) => {
        logger.debug('performing click operation on locator: ' + locator);
        Promise.resolve(ele);
        ele.click();
      });
    } catch (e) {
      logger.error((e as Error).message);
    }
  }
  public static sendKeys(locator: string, locatorType: string, keys: string) {
    /*
    This method can be use to send some text value in the text box
    Argument: locator and locator type
    Returns: N/A
    */
    try {
      this.clearText(locator, locatorType);
      this.getElement(locator, locatorType).then((ele) => {
        logger.debug('sending key: ' + keys + ' on locator: ' + locator);
        Promise.resolve(ele);
        ele.sendKeys(keys);
      });
    } catch (e) {
      logger.error((e as Error).message);
    }
  }

  public static getCurrentUrl() {
    /*
    This method can be use for getting url of a page
    Argument: N/A
    Returns: current url
    */
    try {
      return browser.getCurrentUrl().then((url) => {
        logger.debug('fetching the url of current page..');
        return Promise.resolve(url);
      });
    } catch (e) {
      logger.error((e as Error).message);
    }
  }

  public static clickLinkByHref(hrefLink: string, linkText: string) {
    /*
    This method can be use for clicking on a link text by providing href
    Argument: locator (must be href attribute value) and locator type (must be href), clickable link text
    Returns: N/A
    */
    try {
      browser.findElement(by.cssContainingText('[href*="' + hrefLink + '"]', linkText)).then((ele) => {
        logger.debug('performing click operation on href locator: ' + linkText);
        Promise.resolve(ele);
        ele.click();
      });
    } catch (e) {
      logger.error((e as Error).message);
    }
  }

  public static getText(locator: string, locatorType: string): any {
    /*
    This method can be use for getting text of a locator
    Argument: locator and locator type
    Returns: text <string>
    */
    try {
      return this.getElement(locator, locatorType).then((ele) => {
        logger.debug('performing get text operation on locator');
        Promise.resolve(ele);
        return ele.getText();
      });
    } catch (e) {
      logger.error((e as Error).message);
    }
  }

  public static getElements(locator: string, locatorType: string): any {
    /*
    This method can be use for getting list of elements of a locator
    Argument: locator and locator type
    Returns: List of the element <Array List>
    */
    try {
      return (element.all(this.getByType(locator, locatorType))).then((elements) => {
        logger.debug('fetching the element list: ');
        Promise.resolve(elements);
        return elements;
      });
    } catch (e) {
      logger.error((e as Error).message);
    }
  }
  public static clearText(locator: string, locatorType: string) {
    /*
    This method can be use for clearing a textbox
    Argument: locator and locator type
    Returns: N/A
    */
    try {
      this.getElement(locator, locatorType).then((ele) => {
        logger.debug('Clearing the textbox: ' + locator);
        Promise.resolve(ele);
        ele.clear();
      });
    } catch (e) {
      logger.error((e as Error).message);
    }
  }
}
