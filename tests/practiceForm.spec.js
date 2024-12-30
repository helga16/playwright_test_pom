import { PracticeFormPage } from '../src/pages/PracticeFormPage';
import { faker } from '@faker-js/faker';
import { test } from '@playwright/test';

test.beforeEach(async ({page, baseURL}) => {
    await page.goto(baseURL);
});

test('Sending the form where only required fields are filled', async ({page}) => {
    const practiceFormPage = new PracticeFormPage(page);
    const mobileNumber = Math.random().toString().substr(2, 10);

    await practiceFormPage.fillFirstNameField(faker.person.firstName());
    await practiceFormPage.fillLastNameField(faker.person.lastName());
    await practiceFormPage.fillEmailField(faker.internet.email());
    await practiceFormPage.fillMobileField(mobileNumber);
    await practiceFormPage.fillDob('20 Dec 2005');
    await practiceFormPage.checkGenderFemale();

    await practiceFormPage.submitForm();
    await practiceFormPage.assertSuccessSubmitForm();
});
