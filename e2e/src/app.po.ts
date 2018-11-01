import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.id('loginFormName')).getText();
  }

  getContactText() {
    return element(by.id('welcomeText')).getText();
  }
}
