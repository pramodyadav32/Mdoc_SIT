import  React, {useEffect} from 'react';
 import {View} from 'react-native';
import {  THEME_COLOR } from '../../utils/Const';

import LoginComponent from './LoginComponent';

const LoginContainer = (props) => {
   // const navigation = useNavigation()
    //const store = useStore();
    
    const doLogin = async(values) => {
       alert(JSON.stringify(values));
    }

    useEffect(() => {
    }, [])


    return <View style={{flex:1,backgroundColor: THEME_COLOR}} >
               <LoginComponent doLogin={doLogin} {...props}/>
        </View>
}

export default LoginContainer;