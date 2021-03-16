import  React, {useEffect} from 'react';
 import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { STANDARD_SCREEN_HEIGHT, THEME_COLOR } from '../../utils/Const';
import { Common } from '../../assets';
import { RFValue } from 'react-native-responsive-fontsize';
import commonStyles from '../../styles/GlobalStyles';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import LoginForm from './LoginForm';

const LoginComponent = (props) => {
   
    return <View style={{flex:1,backgroundColor: THEME_COLOR}} >
                <View style={{
                    width: '100%',
                    height: RFValue(140, STANDARD_SCREEN_HEIGHT), 
                    justifyContent: 'center',
                    alignItems:'center',
                }}>
                    <Image source={Common.LOGIN_HEADER_IMG} 
                            style={{
                                width: RFValue(150, STANDARD_SCREEN_HEIGHT), 
                                height: RFValue(100, STANDARD_SCREEN_HEIGHT), 
                                resizeMode: 'contain'
                            }} 
                            resizeMode={'contain'}>
                    </Image>
                </View>
                <View style={[
                        commonStyles.shadowEffect,
                        commonStyles.card,
                        {
                            
                            width: widthPercentageToDP('100%') - RFValue(20 * 2, STANDARD_SCREEN_HEIGHT) ,
                            height: heightPercentageToDP('90%') - RFValue(140, STANDARD_SCREEN_HEIGHT),
                            marginHorizontal: RFValue(40, STANDARD_SCREEN_HEIGHT)
                        }
                ]}>
                    <LoginForm {...props} />
                </View>
                <View style={{
                    width: widthPercentageToDP('100%'),
                    flexDirection: 'row',
                    marginTop: RFValue(10, STANDARD_SCREEN_HEIGHT)

                }}>
                     <TouchableOpacity style={{flex:1, 
                            justifyContent:'center', alignItems:'center',
                            borderWidth: 0,
                            borderRightWidth: 1
                            }}>
                         <Text>Imprint</Text>
                     </TouchableOpacity> 
                     <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center',
                            borderWidth: 0,
                            borderRightWidth: 1
                            }}>
                         <Text>Data Protection</Text>
                     </TouchableOpacity> 
                     <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                         <Text>Conditions</Text>
                     </TouchableOpacity>   
                </View>
        </View>
}

export default LoginComponent;