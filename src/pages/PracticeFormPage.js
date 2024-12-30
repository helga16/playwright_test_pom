import { expect } from "@playwright/test";

export class PracticeFormPage {
    constructor(page) {
        this.page = page;
        this.firstNameField = page.locator('#firstName');
        this.lastNameField = page.locator('#lastName');
        this.mobileField = page.locator('#userNumber');
        this.emailField = page.locator('#userEmail');
        this.genderField = page.locator('[for="gender-radio-2"]');
        this.dob = page.locator('#dateOfBirthInput');
        this.submitBtn = page.locator('#submit');
        this.successHeading = page.locator('.modal-title');
        this.hobbiesOption = page.locator('#hobbies-checkbox-1');
    }

    async fillFirstNameField(name) {
        await this.firstNameField.fill(name);
    }

    async fillLastNameField(lastName) {
        await this.lastNameField.fill(lastName);
    }

    async fillEmailField(email) {
        await this.emailField.pressSequentially(email).then(
            () => this.page.keyboard.press('Enter')
        );
    }

    async fillDob (val) {
        await this.dob.fill(val).then(
            () => this.page.keyboard.press('Enter')
        );
    }

    async fillMobileField(mobile) {
        await this.mobileField.pressSequentially(mobile).then(
            () => this.page.keyboard.press('Enter')
        );
    }

    async checkGenderFemale() {
        await this.genderField.setChecked(true);
    }

    async submitForm() {
        await this.submitBtn.click();
    }

    async assertSuccessSubmitForm() {
        await expect(this.successHeading).toContainText('Thanks for submitting the form');
    }
}