import { expect } from "@playwright/test";

export class PracticeFormPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.mobile = page.locator('#userNumber');
        this.email = page.locator('#userEmail');
        this.gender = page.locator('[for="gender-radio-2"]');
        this.dob = page.locator('#dateOfBirthInput');
        this.submitBtn = page.locator('#submit');
        this.successHeading = page.locator('.modal-title');
   }

    async fillFirstName(name) {
        await this.firstName.fill(name);
    }

    async fillLastName(lastName) {
        await this.lastName.fill(lastName);
    }

    async fillEmail(email) {
        await this.email.pressSequentially(email).then(
            () => this.page.keyboard.press('Enter')
        );
    }

    async fillDob (val) {
        await this.dob.fill(val).then(
            () => this.page.keyboard.press('Enter')
        );
    }

    async fillMobile(mobile) {
        await this.mobile.pressSequentially(mobile).then(
            () => this.page.keyboard.press('Enter')
        );
    }

    async checkGenderFemale() {
        await this.gender.setChecked(true);
    }
    async submitForm() {
        await this.submitBtn.click();
    }

    async assertSuccessSubmitForm() {
        await expect(this.successHeading).toContainText('Thanks for submitting the form');
    }

    async assertRegisteredFullName(value) {
        const rowWithName = this.page.locator('tbody tr').filter({ hasText: 'Student Name' });
        await expect(rowWithName).toContainText(value);
    }
}