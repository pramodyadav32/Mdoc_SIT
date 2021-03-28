/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect } from 'react';
 import {
   StyleSheet,
   View,
   StatusBar,
 } from 'react-native';
 import { THEME_COLOR } from './src/utils/Const';
 import { NavigationContainer } from '@react-navigation/native';
 import Route from './src/routes'
 import configureStore from './src/store/configureStore';
 import { Provider } from 'react-redux';
 import { FormattedProvider, GlobalizeProvider } from 'react-native-globalize';

 import metadata from './src/locales';

 
 console.disableYellowBox = true;
 const consoleMethods = [
   'assert',
   'clear',
   'count',
   'debug',
   'dir',
   'dirxml',
   'error',
   'exception',
   'group',
   'groupCollapsed',
   'groupEnd',
   'info',
   //'log',
   'profile',
   'profileEnd', 
   'table',
   'time',
   'timeEnd',
   'timeStamp',
   'trace',
   'warn',
 ]
 consoleMethods.forEach(methodName => {
   console[methodName] = () => {
     /* noop */
   };
 });
 
 const AppStatusBar = ({backgroundColor, ...props}) => {
   if(Platform.OS == "ios"){
     return (
       <View style={[styles.statusBar, backgroundColor]}>
           <StatusBar backgroundColor={backgroundColor} {...props} />
       </View>
     );
   }else {
     return  <StatusBar backgroundColor={backgroundColor}  {...props} />  
   }
   
 };
 
 export const store = configureStore();
 
 
 const App = () => {
  const [ locale, setLocale] = useState("en");

  const setUpLocale = async() => {
    const locale = await metadata.locale();
    setLocale(locale)
  
  }

  useEffect(() => {
   setUpLocale();
  }, [])

   return (<Provider store={store}>
            <FormattedProvider
                      locale={locale}
                      currency={metadata.currency()}
                      messages={metadata.messages()}
                      skeleton={metadata.dateformat}>
                <GlobalizeProvider locale={locale} currency={metadata.currency()}>
                    <View style={{flex:1}}>
                      {/* <SafeAreaView style={styles.topSafeArea} />
                      <SafeAreaView style={[{flex:1}, {...styles.bottomSafeArea}]}> */}
                              <AppStatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />  
                              <NavigationContainer>
                              <Route></Route>
                              </NavigationContainer>   
                      {/* </SafeAreaView> */}
                    </View>
           </GlobalizeProvider>
           </FormattedProvider>
   </Provider>
   );
 };
 
 const BAR_HEIGHT = StatusBar.currentHeight;
 
 const styles = StyleSheet.create({
   topSafeArea: {
       flex: 0, 
       backgroundColor: THEME_COLOR
   }, 
   bottomSafeArea: {
       flex: 1, 
       backgroundColor: THEME_COLOR
   },
   statusBar: {
     height: BAR_HEIGHT
 },
 });
 export default App;
 