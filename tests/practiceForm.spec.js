import { PracticeFormPage } from '../src/pages/PracticeFormPage';
import { faker } from '@faker-js/faker';
import { test } from '@playwright/test';

test.beforeEach(async ({page, baseURL}) => {
    await page.goto(baseURL);
});

test('Sending the form where only required fields are filled', async ({page}) => {
    const practiceFormPage = new PracticeFormPage(page);
    const mobileNumber = Math.random().toString().substr(2, 10);
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    await practiceFormPage.fillFirstName(firstName);
    await practiceFormPage.fillLastName(lastName);
    await practiceFormPage.fillEmail(faker.internet.email());
    await practiceFormPage.fillMobile(mobileNumber);
    await practiceFormPage.fillDob('20 Dec 2005');
    await practiceFormPage.checkGenderFemale();

    await practiceFormPage.submitForm();
    await practiceFormPage.assertSuccessSubmitForm();
    await practiceFormPage.assertRegisteredFullName(firstName + ' ' + lastName);
});
