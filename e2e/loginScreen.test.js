import { loginScreenStrings } from "../app/constants";

describe('Login Screen', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should render login screen', async () => {
        await expect(element(by.id('Login'))).toBeVisible();

        expect(element(by.text(loginScreenStrings.wlcBack))).toBeVisible();
        expect(element(by.text(loginScreenStrings.loginToCon))).toBeVisible();
        expect(element(by.text(loginScreenStrings.forgotPass))).toBeVisible();
        expect(element(by.text(loginScreenStrings.loginBtn))).toBeVisible();
        expect(element(by.text(loginScreenStrings.newUser))).toBeVisible();
        expect(element(by.text(loginScreenStrings.signUp))).toBeVisible();
    });

    it('should allow user to enter email and password', async () => {
        await element(by.id('emailInput')).typeText('test@gmail.com');
        await element(by.id('passwordInput')).typeText('Password@123');

        await element(by.id('loginButton')).tap();

    });

});
