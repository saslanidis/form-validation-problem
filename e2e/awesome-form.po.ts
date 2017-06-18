import {browser, by, element} from 'protractor';

export class FormValidationProblemAngularPage {
    navigateTo() {
        return browser.get('/');
    }

    getTitle() {
        return element(by.css('.title')).getText();
    }

    submitForm() {
        return element(by.css('.submit-button')).click();
    }

    isEmailValid() {
        return element.all(by.css('.email')).then((element) => {
            return element[0].getAttribute('class').then((attribute) => {
                return !attribute.includes('error');
            });
        });
    }

    isTypeOfTigerValid() {
        return element.all(by.css('.type-tiger')).then((element) => {
            return element[0].getAttribute('class').then((attribute) => {
                return !attribute.includes('error');
            });
        });
    }
}
