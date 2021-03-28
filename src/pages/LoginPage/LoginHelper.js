import * as yup from 'yup';
import IntlProvider from '../../utils/IntlProvider';

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

export const loginIntlProvider =(props)=>({

    loginIn:IntlProvider(props,'app/loginIn')

})
