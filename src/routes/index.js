import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as RouteConst from './RouteConst';
import {LoginPage, SplashPage} from '../pages/';

import { View , Text} from 'react-native';
import { connect, useStore } from 'react-redux';

const MainStack = createStackNavigator();


export const MainRoute = (props) => {
   // const navigation = useNavigation();
   //const [loginData, setLoginData] = React.useState(undefined);
   const {loginData, isLogout} = props;
   const store = useStore();
   const [loading, setLoading] = React.useState(true); 
   
   const getLoginData = async() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000)
    }
  
    React.useEffect(() => {
      getLoginData();
    }, [])

    if(loading){
      return <View style={{flex:1}}>
              <SplashPage />
        </View>
    }

    if(loginData){
      alert(JSON.stringify(loginData));
      return <View style={{flex:1}}>
              <Text>Home Page Routes Here</Text>
      </View>
    }
   
   return (<MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          >
          <MainStack.Screen
            name={RouteConst.LOGIN_PAGE}
            component={LoginPage}
          />
         
        </MainStack.Navigator>
      );
  
};

const mapStateToProps = (state) => {
  return {
    loginData: state.authReducer.loginData,
    isLogout: state.authReducer.isLogout
  }
};
  
export default connect(mapStateToProps)(MainRoute);