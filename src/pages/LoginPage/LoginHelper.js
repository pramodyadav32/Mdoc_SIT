import * as yup from 'yup';

export const SignInFormInitialValues = (props) => ({
    username: '',
    password: '',
});

export const SignInFormValidator = (props) => {
    return (
        yup.object().shape({
            username: yup.string().required("Username is required"),
            password: yup.string().required("Password is required"),
        })
    )
}
