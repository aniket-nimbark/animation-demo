export const loginScreenStrings = Object.freeze({
    email: 'Email',
    password: 'Password',
    wlcBack: 'Welcome Back',
    loginToCon: 'Log in to continue',
    newUser: "New User?",
    signUp: 'Sign Up',
    loginBtn: 'Log In',
    forgotPass: 'Forgot password?'

});

export const logInSchemaError = Object.freeze({
    email: {
        regExError: 'Email is not Valid.',
        requiredError: 'Email is Required.',
    },
    password: {
        regExError:
            'Password must contain minimum 8 character, one upper,one lower and one special character.',
        requiredError: 'Password is required.',
        minimumCharacterError: 'Password must contain minimum 8 characters',
        maximumCharacterError: 'Password must not contain more than 12 characters',
    },
});

export const schemaRegEx = Object.freeze({
    emailRegEx:
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    passwordRegEx:
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    characterOnlyRegEx: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
    digitsOnlyRegEx: /^[0-9]+$/,
});