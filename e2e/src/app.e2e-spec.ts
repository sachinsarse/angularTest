import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  var username = element(by.id('userName'));
  var password = element(by.id('password'));
  var loginBtn = element(by.id('login'));

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Login Page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Login');
  });

  it('should exist Login button', () => {
    let elem = element(by.id('login')); 
    expect(elem.isPresent()).toBeTruthy();
  });

  it('should redirect to Contact Page', function() {
    username.sendKeys("Eternus");
    password.sendKeys(123);
    loginBtn.click();
    browser.sleep(3000);
    expect(page.getContactText()).toEqual('Welcome to Eternus Solutions');
});
it('should not redirect to Contact Page', function() {
  page.navigateTo();
  username.sendKeys("");
  password.sendKeys("");
  loginBtn.click();
  browser.sleep(3000);
  expect(page.getParagraphText()).toEqual('Login');
});
});
