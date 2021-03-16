import  React, {useEffect} from 'react';
 import {View, Text, ImageBackground, Image} from 'react-native';
import { STANDARD_SCREEN_HEIGHT, THEME_COLOR } from '../../utils/Const';
import { Common } from '../../assets';
import { RFValue } from 'react-native-responsive-fontsize';

const SplashPage = (props) => {
    //const navigation = useNavigation()
    //const store = useStore();
    const navigationStep = async() => {
        // const userId = await getUserId();
        // const loginData = await getUserProfileInfo();
        // if(userId){
        //     setTimeout(() => {
        //         //navigation.navigate(APP_DRAWER)
        //         store.dispatch(doLoginActions(loginData));
        //     }, 5000);
        // }else {
        //     setTimeout(() => {
        //         navigation.navigate(INTRO_SCREEN_PAGE)
        //     }, 5000);
        // }
    }

    useEffect(() => {
        navigationStep();
    }, [])


    return <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: THEME_COLOR}} >
               
               <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems:'center'
                }}>
                    <Image source={Common.SPLASH_LOGIN_IMG} 
                            style={{
                                width: RFValue(150, STANDARD_SCREEN_HEIGHT), 
                                height: RFValue(100, STANDARD_SCREEN_HEIGHT), 
                                resizeMode: 'contain'
                            }} 
                            resizeMode={'contain'}>
                    </Image>
                </View>
              
        </View>
}

export default SplashPage;