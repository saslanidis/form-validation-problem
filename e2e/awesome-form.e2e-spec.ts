import {FormValidationProblemAngularPage} from './awesome-form.po';

describe('form-validation-problem-angular App', () => {
    let page: FormValidationProblemAngularPage;

    beforeEach(() => {
        page = new FormValidationProblemAngularPage();
    });

    it('should display Fill out this awesome form', () => {
        page.navigateTo();
        expect(page.getTitle()).toEqual('Fill out this awesome form');
    });

    it('should mark email if it is empty and form submitted', () => {
        page.navigateTo();
        page.submitForm();
        expect(page.isEmailValid()).toBe(false);
    });

    it('should not mark type of tiger if it is empty, tiger not selected and form submitted', () => {
        page.navigateTo();
        page.submitForm();
        expect(page.isTypeOfTigerValid()).toBe(true);
    });
});
