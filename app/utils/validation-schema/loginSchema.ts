import * as Yup from 'yup';
import { logInSchemaError, schemaRegEx } from '../../constants/Strings';

const LogInSchema = Yup.object().shape({
    email: Yup.string()
        .matches(schemaRegEx.emailRegEx, logInSchemaError.email.regExError)
        .required(logInSchemaError.email.requiredError),
    password: Yup.string()
        .min(8, logInSchemaError.password.minimumCharacterError)
        .max(12, logInSchemaError.password.maximumCharacterError)
        .matches(schemaRegEx.passwordRegEx, logInSchemaError.password.regExError)
        .required(logInSchemaError.password.requiredError),
});

export default LogInSchema;
