import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as RouteConst from './RouteConst';
import {LoginPage, SplashPage} from '../pages/';

import { View , Text,  Animated, Dimensions, StyleSheet} from 'react-native';
import { connect, useStore } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';
import { STANDARD_SCREEN_HEIGHT, THEME_COLOR, WHITE_COLOR } from '../utils/Const';
import { TAB_ICONS } from '../assets';
import BottomCenterView from '../components/BottomCenterView/BottomCenterView';
import TabContainer from '../pages/TabPage/TabContainer';
import commonStyles from '../styles/GlobalStyles'
const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const studentTabBarIcons = [TAB_ICONS.HOME, TAB_ICONS.FD_CASH, TAB_ICONS.PROFILE, TAB_ICONS.SETTINGS];


function CustomTabBar({ state, descriptors, navigation, loginData }) {
  const [translateValue] = React.useState(new Animated.Value(0));
  const totalWidth = Dimensions.get("window").width;
  const tabWidth = totalWidth / state.routes.length;

  return (<View style={[style.tabContainer, { width: totalWidth }]}>
      <View style={{ flexDirection: "row" }}>
        <Animated.View
          style={[
            style.slider,
            {
              transform: [{ translateX: translateValue }],
              //width: tabWidth - 20,
            },
          ]}
        />
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          const iconName =  studentTabBarIcons[index];
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }

            Animated.spring(translateValue, {
              toValue: index * tabWidth,
              velocity: 10,
              useNativeDriver: true,
            }).start();
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (<BottomCenterView
              color={WHITE_COLOR} 
              iconImageSize={24} 
              title={label} 
              imageName={iconName}
              onPress={onPress}
              onLongPress={onLongPress}
              index={index+1}
              numberOfTabs={state.routes.length}
              >
          </BottomCenterView>
          );
        })}
      </View>
    </View>
  );
}

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
      return  <MainTab.Navigator
                  tabBar={props => <CustomTabBar loginData={loginData} {...props} />}
                  tabBarOptions={{
                      activeTintColor: WHITE_COLOR,
                      inactiveTintColor: WHITE_COLOR,
                      labelStyle: commonStyles.bottomTabText,
                      style: commonStyles.bottomContainer,
                      tabStyle: commonStyles.tabStyle
                  }}
                  initialRouteName={"Tab1"}>
          <MainTab.Screen 
                name={"Tab1"} 
                component={TabContainer}   
            />
             <MainTab.Screen 
                name={"Tab2"} 
                component={TabContainer}   
            />
            <MainTab.Screen 
                name={"Tab3"} 
                component={TabContainer}   
            />
            <MainTab.Screen 
                name={"Tab4"} 
                component={TabContainer}   
            />
      </MainTab.Navigator>
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

const style = StyleSheet.create({
  tabContainer: {
    height: RFValue(60, STANDARD_SCREEN_HEIGHT),
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: "white",
    //borderTopRightRadius: 20,
    //borderTopLeftRadius: 20,
    elevation: 10,
    position: "absolute",
    bottom: 0,
  },
  slider: {
    height: 5,
    position: "absolute",
    top: 0,
    left: 10,
    backgroundColor: THEME_COLOR,
    borderRadius: 0,
    borderBottomStartRadius: 10,
    borderBottomRightRadius: 10,
  },
})

const mapStateToProps = (state) => {
  return {
    loginData: state.authReducer.loginData,
    isLogout: state.authReducer.isLogout
  }
};
  
export default connect(mapStateToProps)(MainRoute);