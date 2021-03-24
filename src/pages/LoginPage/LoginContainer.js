import  React, {useEffect} from 'react';
import { Alert } from 'react-native';
 import {View} from 'react-native';
import { useStore } from 'react-redux';
import { doLoginActions } from '../../actions/authActions';
import api from '../../api';
import {  THEME_COLOR } from '../../utils/Const';

import LoginComponent from './LoginComponent';

const LoginContainer = (props) => {
   // const navigation = useNavigation()
    //const store = useStore();
    const [loading, setLoading] = React.useState(false);
    const store = useStore();
    const doLogin = async(values) => {
      setLoading(true);
      const res = await api.user.loginUser({
         client_id:"rollout9mdocdev-ios",
         client_secret:"b082b00f-93a7-423d-bf1b-b8304b660cf2",
         friendlyName:"vivo 1723 # fxGLfPXkS8WHyyMVMWI5mX",
         password:values.password,
         totp:"",
         username:values.username
      })
      console.log("res ==== > ", res);
      if(res && res.message == "SUCCESS") {
            const resData = res.data;
            store.dispatch(doLoginActions(resData));
      }else {
         Alert.alert("Error", res.message);
      }
      setLoading(false);
      
       
    }

    useEffect(() => {
    }, [])


    return <View style={{flex:1,backgroundColor: THEME_COLOR}} >
               <LoginComponent doLogin={doLogin} {...props}/>
               
        </View>
}

export default LoginContainer;